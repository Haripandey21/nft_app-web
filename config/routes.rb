Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }
  root "pages#index"
  get "mainpage" => "pages#index"

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
