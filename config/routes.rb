Rails.application.routes.draw do
  resources :users
  resources :products
  resources :orders

  get "/login" => "sessions#new", as: "login"
  post "/logout" => "sessions#create", as: "logout"
  get "/logout" => "sessions#logout"

  root 'products#index'

end
