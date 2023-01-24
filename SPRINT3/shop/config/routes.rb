Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  root 'home#index'
  resources :products
  resources :users
  resources :categories
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
