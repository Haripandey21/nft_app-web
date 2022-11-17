import { Collectible_Contract, contractConnection,Exchange_Contract } from "../custom/ContractConnection";
import { accounts,web3 } from "../custom/MetamaskConnection";

async function transferToken(tokenID,tokenPrice) {
  await contractConnection();
  const amount = web3.utils.toBN(tokenPrice * 10 ** 18); 
  
    await Exchange_Contract.methods
    .transferNfts(gon.Collectible_contractAddress, parseInt(tokenID), accounts[0], amount)
    .send({ from: accounts[0], value: amount });
    // const TransferEvent = await Collectible_Contract.getPastEvents("Transfer", {}); 
    // console.log("Transfer Events : ",TransferEvent);
 
}
export {transferToken};





