import { NFTContract, contractConnection } from "../custom/ContractConnection";
import { accounts } from "../custom/MetamaskConnection";

async function callApprove(tokenID) {
  await contractConnection();

 console.log(gon.contractAddress);
  await NFTContract.methods.approve(gon.contractAddress,parseInt(tokenID)).send({ from: accounts[0] });
  console.log("setting approval of your token completed... ")
  let event = await NFTContract.getPastEvents("Approval", {});
  console.log(event);
//  return event;
}

export {callApprove};

 