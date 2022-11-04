Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "pages#index"
  get 'mint_nfts' => 'pages#mint' 
  get 'explore' => 'pages#explore'
  get 'add-Token' => 'pages#addToken' 
  

  get 'buy' => 'nfts#buy'
  get 'sell' => 'nfts#sell'
  get 'edit' => 'nfts#edit'


  resources :pages
  resources :nfts do
    resources :sales
  end
end
