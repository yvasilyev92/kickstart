import React, {Component} from 'react';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import Layout from '../../components/Layout.js';
import factory from '../../ethereum/factory.js';
import web3 from '../../ethereum/web3.js';
import {Router} from '../../routes.js';


class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: '',
    loading: false,
    title: '',
    description: ''
  };

  onSubmit = async (event) => {
    event.preventDefault(); // Prevent browser from attempting to submit form to backend server.
    this.setState({ loading : true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minimumContribution, this.state.title, this.state.description)
        .send({
          from: accounts[0]
        });
      // Redirect user to Index route.
      Router.pushRoute('/');
    } catch (err) {
        this.setState({errorMessage : err.message.split("\n")[0] });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>

        <h3>Create a Campaign</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={event => this.setState({ minimumContribution : event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Campaign Title</label>
            <Input
              value={this.state.title}
              onChange={event => this.setState({ title : event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Campaign Description</label>
            <Input
              value={this.state.description}
              onChange={event => this.setState({ description : event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage}/>
          <Button loading={this.state.loading} primary>Create!</Button>
        </Form>

      </Layout>
    );
  }
}

export default CampaignNew;
