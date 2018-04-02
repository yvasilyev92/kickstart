import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import factory from '../ethereum/factory.js';
import Layout from '../components/Layout.js';
import {Link} from '../routes.js';
import Campaign from '../ethereum/campaign.js';

class CampaignIndex extends Component {

  state = {
    arr: [{header:'Loading...', meta: '', description: '', fluid:true}]
  };

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const results = this.props.campaigns.map(async (address) => {
      let campaign = Campaign(address);
      return {
        header: await campaign.methods.campaignTitle().call(),
        meta: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid:true
      };
    });
    Promise.all(results).then((completed) => {
      this.setState({arr:completed});
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <Layout>
        <div>

          <div>SmartKickStarter is managed by Yevgeniy Vasilyev & deployed on the Rinkeby Network via Contract: <b>0xdf46CB2afE1F939138aDd2b53Bd36209826123Ad</b></div>
          <div>Metamask is required to interact with this application.</div>
          <h2>Open Campaigns</h2>

          <Link route="/campaigns/new">
            <a>
              <Button floated="right" content="Create Campaign" icon="add circle" primary={true}/>
            </a>
          </Link>

          {this.renderCampaigns()}

          <Card.Group items={this.state.arr} />

        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
