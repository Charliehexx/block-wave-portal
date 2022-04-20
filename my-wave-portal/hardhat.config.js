require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/M0OpMAGH03OFjJzqpLkxA6rhSET0Hdll",
      accounts: ["fc10f3ea25109091b908ca8b7f5ebc9668f44f06731be0f53d7be840231d8872"]
    },
  },
};