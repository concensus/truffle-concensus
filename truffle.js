module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kovan: {
      host: "https://ropsten.infura.io/AbCJCEfsxCI94d5XdhMS",
      port: 8545,
      network_id: "*"
    }
  }
};
