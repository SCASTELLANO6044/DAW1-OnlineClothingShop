Rails.application.routes.draw do
  resources :products
  resources :categories
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'products#index'
  namespace :api do
    get "/categories", to: "categories#index"
  end

  namespace :api do
    get "/products", to: "products#index"
  end
end
