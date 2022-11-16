import COLLECTIBLE_ABI from "../abi/Nft-Collectible.json";
import EXCHANGE_ABI from "../abi/Nft-Exchange.json";
import { web3 } from "./MetamaskConnection";
let Collectible_Contract;
let Exchange_Contract;

async function contractConnection() {
  Collectible_Contract = new web3.eth.Contract(COLLECTIBLE_ABI,gon.Collectible_contractAddress);
  Exchange_Contract = new web3.eth.Contract(EXCHANGE_ABI,gon.Exchange_contractAddress); 

}

export { contractConnection, Collectible_Contract,Exchange_Contract };



