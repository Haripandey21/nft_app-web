import { Collectible_Contract, contractConnection } from "../custom/ContractConnection";
import { accounts } from "../custom/MetamaskConnection";

async function mintNFT(metaDataURI) {
  await contractConnection();
  console.log("connecion estd...")
  await Collectible_Contract.methods.safeMint(metaDataURI).send({ from: accounts[0] });
  console.log("nft minted ")
  let event = await Collectible_Contract.getPastEvents("Transfer", {});
  console.log(event);
 return event;
}

export { mintNFT };

