class PagesController < ApplicationController    

    def index        
    end 
    
    def mint
    end 
    
    def create
    end 

    def explore 
        @tables=Table.all

    end 

    def addToken
        @tables = Table.all        
        UpdateLatestMIntJob.perform_now("0xaea6927A74e7Da32c1e62CeBcA759E1C91fdEA8f",@tables.length)
        redirect_to explore_path
      end 
   
end

















