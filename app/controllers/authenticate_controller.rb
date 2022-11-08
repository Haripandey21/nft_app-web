class AuthenticateController < ApplicationController
    before_action :authenticate_user!

    def homepage
    end 
end
