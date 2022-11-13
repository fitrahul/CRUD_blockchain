require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/yHh6UKtge7pajgTsuFYIQPHZ4JuDTQ5t",
      accounts: ["97227d5055f9d496e87333d67469f58bd403ff71078915f04b346b9323ccccad"]
    }
  }
};
