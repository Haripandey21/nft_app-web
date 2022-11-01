import { NFTContract, contractConnection } from "../custom/ContractConnection";
import { accounts } from "../custom/MetamaskConnection";

async function mintNFT(metaDataURI) {
  await contractConnection();
  await NFTContract.methods.safeMint(metaDataURI).send({ from: accounts[0] });
  let event = await NFTContract.getPastEvents("Transfer", {});
  console.log("minted event:", event);
}

export { mintNFT };
