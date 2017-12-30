Rails.application.routes.draw do
  get 'pages/home'
  root to: "pages#home"
  namespace :api, defaults: {format: :json} do
    resources :books, only: [:index]
  end
end
