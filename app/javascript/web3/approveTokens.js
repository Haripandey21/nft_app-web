import { Collectible_Contract, contractConnection } from "../custom/ContractConnection";
import { accounts } from "../custom/MetamaskConnection";

async function callApprove(tokenID) {
  await contractConnection();
  await Collectible_Contract.methods.approve(gon.Exchange_contractAddress,parseInt(tokenID)).send({ from: accounts[0] });
  let approvalevent = await Collectible_Contract.getPastEvents("Approval", {});
  return approvalevent;
}

export {callApprove};

 