
var Poll = artifacts.require("./Poll.sol");

contract('Poll', function(accounts) {
  var account1 = accounts[0];
  var account2 = accounts[1];
  var account3 = accounts[2];
  var account4 = accounts[3];

  var pollInstance;
  var contractAddress;

  it("votes from each of the accounts", function() {

    return Poll.deployed()
    .then(function(instance) {
      pollInstance = instance;
      console.log(pollInstance);
      contractAddress = instance.address;
      return instance.getTitle.call();
    })
    .then(function(title) {
      console.log("Title" + title);
      return pollInstance.getProposition.call();
    })
    .then(function(proposition) {
      console.log(proposition);
    });

  });

  it("Creates Poll instance from address, then logs info", function() {
      return this.PollContract.at(contractAddress).getTitle.call()
      .then((title) => {
        console.log(title)
        return this.PollContract.at(contractAddress).proposition.call()
      })
      .then((proposition) => {
        console.log(proposition);
        return this.PollContract.at(contractAddress).endTime.call()
      })
      .then((endTime) => {
        console.log(endTime)
        return this.PollContract.at(contractAddress).votesRequired.call()
      })
      .then((votesRequired) => {
        console.log(votesRequired)
        return this.PollContract.at(contractAddress).votesAllowed.call()
      })
      .then((votesAllowed) => {
        console.log(votesAllowed)
      })

  });


});
