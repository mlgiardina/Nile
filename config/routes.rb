Rails.application.routes.draw do
  resources :users
  resources :products
  resources :orders

  root 'products#index'

end
