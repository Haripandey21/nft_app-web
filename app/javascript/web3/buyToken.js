import { Collectible_Contract, contractConnection,Exchange_Contract } from "../custom/ContractConnection";
import { accounts,web3 } from "../custom/MetamaskConnection";

async function transferToken(tokenID,tokenPrice) {
  await contractConnection();
  const amount = web3.utils.toBN(tokenPrice * 10 ** 18); 

  // let owner_token= await  Collectible_Contract.methods.ownerOf(parseInt(tokenID)).send({ from: accounts[0] }); 
  // let approvedAddr= await  Collectible_Contract.methods.getApproved(parseInt(tokenID)).send({ from: accounts[0] });
  // if( approvedAddr== gon.Collectible_contractAddress)
    await Exchange_Contract.methods
    .transferNfts(gon.Collectible_contractAddress, parseInt(tokenID), accounts[0], amount)
    .send({ from: accounts[0], value: amount });

    const TransferEvent = await Collectible_Contract.getPastEvents("Transfer", {}); 
    console.log("Transfer Events : ",TransferEvent);

    if (TransferEvent)
    {
      let seller= await Collectible_Contract.methods.ownerOf(tokenID).call();
      console.log("seller",seller)
      await Exchange_Contract.methods.transferEther(seller,amount).send ({from: address[0]});
      console.log("fund settlement");
    }
  
}
export {transferToken};










