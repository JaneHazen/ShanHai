Rails.application.routes.draw do
  resources :unreadbooks, only: [:create]
  resources :booklists
  devise_for :users, controllers: {registrations: 'registrations', sessions:'sessions'}
  get 'pages/home'
  get 'pages/are_we_there_yet'
  get 'api/books/country'
  get 'api/books/book_id'
  root to: "pages#home"
  namespace :api, defaults: {format: :json} do
    resources :books, only: [:index, :create, :destroy]
  end
  get '*path', to: 'pages#home'
end
