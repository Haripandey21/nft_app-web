import ABI from "../abi/Nft-Contract.json";
import { web3 } from "./MetamaskConnection";
let NFTContract;

async function contractConnection() {
  NFTContract = new web3.eth.Contract(ABI,"0x8E0aC0Cc83c66a6C555344684EEE06D54d203935");
}

export { contractConnection, NFTContract };


