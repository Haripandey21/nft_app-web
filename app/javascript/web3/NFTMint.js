import { NFTContract, contractConnection } from "../custom/ContractConnection";
import { accounts } from "../custom/MetamaskConnection";

async function mintNFT(metaDataURI) {
  await contractConnection();
  console.log("connecion estd...")
  await NFTContract.methods.safeMint(metaDataURI).send({ from: accounts[0] });
  console.log("nft minted ")
  let event = await NFTContract.getPastEvents("Transfer", {});
  console.log(event);
 return event;
}

export { mintNFT };

