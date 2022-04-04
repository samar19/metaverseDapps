const Land = artifacts.require("Land");

module.exports = async function (deployer) {

    const NAME ="Ms_hack"
    const SYOBL ="Ms"
    const COST = web3.utils.toWei('1', 'ether')
   
  await deployer.deploy(Land ,NAME,SYOBL,COST);
};