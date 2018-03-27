pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    Request[] public requests;
    uint public approversCount;

    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);
        if(!approvers[msg.sender]){
            approvers[msg.sender] = true;
            approversCount++;
        }
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });
        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage currentRequest = requests[index];

        require(approvers[msg.sender]);
        require(!currentRequest.approvals[msg.sender]);

        currentRequest.approvals[msg.sender] = true;
        currentRequest.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage currentRequest = requests[index];

        require(currentRequest.approvalCount > (approversCount / 2));
        require(!currentRequest.complete);

        currentRequest.recipient.transfer(currentRequest.value);
        currentRequest.complete = true;
    }

    function getSummary() public view returns (uint, uint, uint, uint, address) {
      return (
          minimumContribution,
          this.balance,
          requests.length,
          approversCount,
          manager
        );
    }

    function getRequestsCount() public view returns (uint) {
      return requests.length;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
}
