Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#index"

  get "mainpage" => "pages#index"

  # root :to => "devise/sessions#create" 

  get 'mint_nfts' => 'pages#mint' 
  get 'explore' => 'pages#explore'
  get 'add-Token' => 'pages#addToken' 
  
  get 'sell' => 'nfts#sell'
  get 'edit' => 'nfts#edit'

  get 'buynfts' => 'sales#buynfts' 


  resources :pages
  resources :nfts do
    resources :sales
  end
 resources :buy
end
