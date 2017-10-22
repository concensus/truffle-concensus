pragma solidity ^0.4.15;

contract Poll {

    event PollCreated (string title, string proposition);

    function Poll (string title, string proposition,
    uint endTime, uint votesRequired, uint votesAllowed) public
    {
    _title = title;
    _proposition = proposition;
    _startTime = block.timestamp; //Also now
    _endTime = endTime;

    _votesRequired = votesRequired;
    _votesAllowed = votesAllowed;

    PollCreated(title, proposition);
    }


    uint public _startTime;
    uint public _endTime;

    string public _title;
    string public _proposition;

    //TODO: Change this to private, onlyOwner modifier
    uint public _votesRequired;
    uint public _votesAllowed;

    address[] public yesVotes;
    address[] public noVotes;
    address[] public maybeVotes;

    //TODO: Add whitelist of allowable Ethereum addresses
    event Voted(address indexed voterAddress, uint indexed voteType);

    modifier pollNotEnded {
        require(now <= _endTime * (1 minutes));
        _;
    }

    function getTitle() constant returns (string title){
      return _title;
    }
    function getProposition() constant returns (string proposition){
      return _proposition;
    }

    //Javascript should call this every second, as there's no way to
    //execute functions internally with time :(
    function hasPollEnded () constant returns (bool hasEnded)
    {
        if (now <= _endTime){
            return false;
        }
        return true;
    }

    // TODO: functionality for changing vote.
    function vote (uint8 voteType) public pollNotEnded
    {
        address voterAddress = msg.sender;
        if (voteType == 0){
            noVotes.push(voterAddress);
        }
        else if (voteType == 1){
            yesVotes.push(voterAddress);
        }
        else if (voteType == 2) {
            maybeVotes.push(voterAddress);
        }
        Voted(voterAddress, voteType);
    }
}
