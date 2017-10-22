var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Poll = artifacts.require("./Poll.sol");

module.exports = function(deployer) {
  var additionalArgs = ["boba?", "Yes or no", "10", "10", "10"];
  deployer.deploy(Poll, additionalArgs);
};
