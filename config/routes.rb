Rails.application.routes.draw do
  resources :booklists
  devise_for :users, controllers: {registrations: 'registrations', sessions:'sessions'}
  get 'pages/home'
  get 'pages/are_we_there_yet'
  root to: "pages#home"
  namespace :api, defaults: {format: :json} do
    resources :books, only: [:index, :create, :destroy]
  end
end
