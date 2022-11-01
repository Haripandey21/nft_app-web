class FetchDataJob < ApplicationJob
  queue_as :default

  require 'rest-client'

  def perform(contractAddress)
  @tokens = `python3 lib/assets/python/fetchTokenScript.py "#{contractAddress}"`
  @parsedTokens=JSON.parse(@tokens)
  @nfts=Array.new()
  puts @parsedTokens[0]
  puts @parsedTokens[4]

  for (i...@parsedTokens.length) do 
    {
      
      
    }
  end




end


