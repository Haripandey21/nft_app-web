import { Web3Storage } from "web3.storage";
import { mintNFT } from "../web3/NFTMint";
let client;
let api_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBkMEFCNDcyMDE0N2E3QkIzMTIxYzEwOTg0OTY2NmIxMEFhRjUxMjUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjYxNjkyMDUwOTQsIm5hbWUiOiJuZnRfcHJvamVjdCJ9.5gRrUl2ESv4vkikRYrApPz9kNra9jsy6eQuDkvPczyI"

function getAccessToken() {
  return api_token;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

// function to upload image in a web3storage
async function uploadImage(file, inputValues) {
  let fileInfo = file.files[0];
  client = makeStorageClient();
  const imageCID = await client.put(file.files);
  let imageURI = `https://${imageCID}.ipfs.dweb.link/${fileInfo.name}`;
  let nftJSON = jsonConvert(imageURI, inputValues);
  uploadMetaData(nftJSON, inputValues);
}

// function to upload json in a web3
async function uploadMetaData(nftJSON, inputValues) {
  const blob = new Blob([nftJSON], { type: "application/json" });
  const files = [new File([blob], `${inputValues.name}.json`)];
  console.log("blob files", files);
  const metaDataCID = await client.put(files);
  let metaDataURI = `https://${metaDataCID}.ipfs.dweb.link/${inputValues.name}.json`;
  await mintNFT(metaDataURI);
  console.log("metadata URI", metaDataURI);
}

// function to make a json metaData for nft
function jsonConvert(imageURI, inputValues) {
  jsonObject = {
    "name": `${inputValues.name}`,
    "description": `${inputValues.description}`,
    "image": `${imageURI}`,
  };
  return JSON.stringify(jsonObject);
}

export { uploadImage };


