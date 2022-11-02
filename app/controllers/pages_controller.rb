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
end
