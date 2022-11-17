import { Collectible_Contract, contractConnection } from "../custom/ContractConnection";
import { accounts } from "../custom/MetamaskConnection";

async function mintNFT(metaDataURI) {
  await contractConnection();
  await Collectible_Contract.methods.safeMint(metaDataURI).send({ from: accounts[0] });
  let event = await Collectible_Contract.getPastEvents("Transfer", {});
  // console.log(event);
 return event;
}

export { mintNFT };

