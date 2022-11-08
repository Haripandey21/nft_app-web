import ABI from "../abi/Nft-Contract.json";
import { web3 } from "./MetamaskConnection";
let NFTContract;

async function contractConnection() {
  NFTContract = new web3.eth.Contract(ABI,gon.contractAddress);
}

export { contractConnection, NFTContract };


