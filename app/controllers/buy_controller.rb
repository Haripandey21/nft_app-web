class BuyController < ApplicationController
    
    def show 
        
        @list = Listtoken.find_by(table_id: params[:id])
        @tables=Table.all
    end

end






