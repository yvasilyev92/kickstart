import React, {Component} from 'react';
import {Form, Button, Message,Input} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign.js';
import web3 from '../../../ethereum/web3.js';
import {Link,Router} from '../../../routes.js';
import Layout from '../../../components/Layout.js';

class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: ''
  };

  static async getInitialProps(props) {
    const {address} = props.query;
    const campaign = Campaign(address);
    const title = await campaign.methods.campaignTitle().call();

    return {address,title};
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);
    const {description,value,recipient} = this.state;
    this.setState({ loading : true, errorMessage : ''});

    try{
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(description, web3.utils.toWei(value,'ether'), recipient)
        .send({from: accounts[0]});

      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
        this.setState({ errorMessage : err.message.split("\n")[0] });
    }

    this.setState({ loading : false });
  };

  render() {
    return (
      <Layout>
      <Link route={`/campaigns/${this.props.address}/requests`}>
        <a>Back</a>
      </Link>
      <h3>Create a Payment Request for Campaign: {`${this.props.title}`}</h3>
      <h5>Only the Campaign Manager may create a Request.</h5>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

        <Form.Field>
          <label>Description</label>
          <Input
            value={this.state.description}
            onChange={event => this.setState({ description : event.target.value })}
          />
        </Form.Field>

        <Form.Field>
          <label>Value in Ether</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value : event.target.value })}
          />
        </Form.Field>

        <Form.Field>
          <label>Recipient Address</label>
          <Input
            value={this.state.recipient}
            onChange={event => this.setState({ recipient : event.target.value })}
          />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>Create!</Button>
      </Form>
      </Layout>
    );
  }
}

export default RequestNew;
