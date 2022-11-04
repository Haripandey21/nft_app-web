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
        UpdateLatestMIntJob.perform_now("0x8E0aC0Cc83c66a6C555344684EEE06D54d203935",@tables.length)
        redirect_to explore_path
      end 
   
end







