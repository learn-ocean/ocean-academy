const Certificate = artifacts.require("Certificate");

module.exports = async function(deployer) {
  deployer.deploy(Certificate);
  //const erc721 = await Certificate.deployed()
};
