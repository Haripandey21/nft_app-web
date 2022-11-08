class ApplicationController < ActionController::Base

    before_action :setGonData
    
    def setGonData
        gon.web3StorageAPIKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBkMEFCNDcyMDE0N2E3QkIzMTIxYzEwOTg0OTY2NmIxMEFhRjUxMjUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjYxNjkyMDUwOTQsIm5hbWUiOiJuZnRfcHJvamVjdCJ9.5gRrUl2ESv4vkikRYrApPz9kNra9jsy6eQuD"
        gon.contractAddress = "0x8E0aC0Cc83c66a6C555344684EEE06D54d203935"
    end 
end
