class UpdateLatestMIntJob < ApplicationJob
    queue_as :default
    require 'json'
    require 'rest-client'
  
    def perform(contractAddress,totalRow)
      @tokens = `python3 lib/assets/python/updateLatestMint.py "#{contractAddress}" "#{totalRow}"`
      parsedTokens = JSON.parse(@tokens)
      @nfts = Array.new()
      for i in (0...parsedTokens.length)do 
          individualNFTObject = fetchAPI(parsedTokens[i])
          @nfts.push(individualNFTObject)
      end 
      updateModel()
    end
    
    
    def fetchAPI(individualNFTArray)
      tokenURI  = individualNFTArray[1]
      singleNFT = Hash[]
      tokenIPFSData = JSON.parse(RestClient::Request.execute(method: :get, url: tokenURI, timeout: 20))
      singleNFT[:tokenID] = individualNFTArray[0]
      singleNFT[:tokenURI] = individualNFTArray[1]
      singleNFT[:name] = tokenIPFSData["name"]
      singleNFT[:description] = tokenIPFSData["description"]
      singleNFT[:imageURI] = tokenIPFSData["image"]
      return singleNFT
    end
  
    def updateModel()
      for i in 0...@nfts.length do
        token = Table.where(table_id: @nfts[i][:tokenID]).where(token_URI: @nfts[i][:tokenURI])
        if(token.empty?)
          Table.create(table_id: @nfts[i][:tokenID], token_URI: @nfts[i][:tokenURI], name: @nfts[i][:name], description: @nfts[i][:description], image_URI: @nfts[i][:imageURI])
        end
      end
    end
  end
  
