class ApplicationController < ActionController::Base

    before_action :setGonData
    
    def setGonData
        gon.web3StorageAPIKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBkMEFCNDcyMDE0N2E3QkIzMTIxYzEwOTg0OTY2NmIxMEFhRjUxMjUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjYxNjkyMDUwOTQsIm5hbWUiOiJuZnRfcHJvamVjdCJ9.5gRrUl2ESv4vkikRYrApPz9kNra9jsy6eQuDkvPczyI"
        gon.Collectible_contractAddress = "0xaea6927A74e7Da32c1e62CeBcA759E1C91fdEA8f"
        gon.Exchange_contractAddress = "0xDB9e96E493402B7dFf6c4FD6F260D1C49652c8E3"
    end 
end

