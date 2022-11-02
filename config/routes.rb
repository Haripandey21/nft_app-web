Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "pages#index"
  get 'mint_nfts' => 'pages#mint' 
  get 'explore' => 'pages#explore'

  resources :pages
end
