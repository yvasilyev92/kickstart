import React, {Component} from 'react';
import {Card,Grid,Button} from 'semantic-ui-react';
import Layout from '../../components/Layout.js';
import Campaign from '../../ethereum/campaign.js';
import web3 from '../../ethereum/web3.js';
import ContributeForm from '../../components/ContributeForm.js';
import {Link} from '../../routes.js';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    // Anytime we return a function from a contract call that returns multiple values we get a Result object with an array-like object.
    const summary = await campaign.methods.getSummary().call();
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards () {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign & can create requests to send payments.',
        style: { overflowWrap : 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much Wei to become an approver.'
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.'
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this campaign'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left to spend.'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        <Grid>
          <Grid.Column width={10}>
            {this.renderCards()}
            <Link route={`/campaigns/${this.props.address}/requests`}>
              <a><Button primary>View Requests</Button></a>
            </Link>
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={this.props.address} />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }

}

export default CampaignShow;
