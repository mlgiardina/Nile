Rails.application.routes.draw do
  resources :users
  resources :products
  resources :orders

  get "/login" => "sessions#new", as: "login"
  post "/login" => "sessions#create"
  get "/logout" => "sessions#destroy"

  root 'products#index'

end
