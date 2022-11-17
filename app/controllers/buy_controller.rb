class BuyController < ApplicationController
    
    def show 
        
        @list = Listtoken.find_by(table_id: params[:id])
        @tables=Table.all
        @com=Table.includes(:listtoken).where(table_id: params[:id])
        
    end


end

