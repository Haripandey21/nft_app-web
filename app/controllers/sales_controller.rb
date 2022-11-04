class SalesController < ApplicationController
    def index
        @nft = Table.find(params[:nft_id])
    end

    def create 
        
    end 

end
