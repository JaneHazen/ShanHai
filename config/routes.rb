Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: 'registrations', sessions:'sessions'}
  get 'booklists/getcomments'
  get 'pages/home'
  get 'pages/are_we_there_yet'
  get 'api/books/country'
  get 'api/books/book_id'
  post 'unreadbooks/make_a_book'
  resources :unreadbooks, only: [:index, :create, :destroy]
  root to: "pages#home"
  namespace :api, defaults: {format: :json} do
    resources :books, only: [:index, :create, :destroy]
  end
  get '*path', to: 'pages#home'
end
