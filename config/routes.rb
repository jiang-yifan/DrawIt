Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session
  namespace :api, defaults:{format: :json} do
    resources :drawings
    resources :portfolios
    resources :comments
    resources :favorite_drawings
  end
end
