import ABI from "../abi/Nft-Contract.json";
import { web3 } from "./MetamaskConnection";
let NFTContract;

async function contractConnection() {
  NFTContract = new web3.eth.Contract(ABI,"0xA285A79cFEB992AF05EaC4F5E9038E25C9a84656");
}

export { contractConnection, NFTContract };

