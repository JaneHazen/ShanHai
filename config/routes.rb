Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: 'registrations', sessions:'sessions'}
  get 'pages/home'
  root to: "pages#home"
  namespace :api, defaults: {format: :json} do
    resources :books, only: [:index]
  end
end
