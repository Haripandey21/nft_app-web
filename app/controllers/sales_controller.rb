class SalesController < ApplicationController
    # def index
    #     @nft = Table.find(params[:nft_id])

    # end

    def create  
        if((Table.find(params[:nft_id]).listtoken).nil?)  
            Listtoken.create(table_id: params[:nft_id], token_price: params[:form][:Listingprice], isListed: true)
            redirect_to explore_path
          
        else
            
            list = Listtoken.find_by(table_Id: params[:nft_id])
             
            list.update(token_price: params[:form][:Listingprice], isListed: true)
            redirect_to explore_path 
        end
    end 
    
    def new 
        @table = Table.find(params[:nft_id]) 

    end 
    
    def destroy
        list = ListToken.find(params[:id])
        list.update(isListed: false)
        redirect_to root_path
    end

    def buynfts 
        @tokenlist=Listtoken.all
    end
    

end















