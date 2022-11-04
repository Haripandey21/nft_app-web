class NftsController < ApplicationController

def buy 
end 

def sell 
    @nft = Table.find(params[:id])
end 

end
