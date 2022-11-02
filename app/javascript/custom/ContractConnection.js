import ABI from "../abi/Nft-Contract.json";
import { web3 } from "./MetamaskConnection";
let NFTContract;

async function contractConnection() {
  NFTContract = new web3.eth.Contract(ABI,"0x7CC9cccb07b04b5D403aa37bf6e5aB3D993b53FC");
}

export { contractConnection, NFTContract };

