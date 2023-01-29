Rails.application.routes.draw do
  resources :user_products
  get 'home/index'
  get '/search', to: "products#search"
  resources :products
  resources :categories
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :users, param: :_username
  # Defines the root path route ("/")
  # root "articles#index"
  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'
end
