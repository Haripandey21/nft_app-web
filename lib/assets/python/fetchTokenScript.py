from web3 import Web3
import sys
import json

# importing abi json file
fileName = "app/javascript/abi/Nft-Contract.json"
file = open(fileName,"r")
abiJson= json.load(file)


alchemy_url = "https://eth-goerli.g.alchemy.com/v2/wGupeSWl5hhlYddJykzemfko_u0O-ooU"
w3 = Web3(Web3.HTTPProvider(alchemy_url))
  

contractAddress = str(sys.argv[1])

NFTContract =  w3.eth.contract(address=contractAddress,abi=abiJson)
tokensInfo = NFTContract.functions.getAllTokens().call()
print(json.dumps(tokensInfo))


