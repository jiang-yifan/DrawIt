Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [] do
    collection do
      get :get_current_user_id
    end
  end

  resource :session, only:[:new, :create, :destroy]
  namespace :api, defaults:{format: :json} do

    resources :users, only: [:create, :update, :destroy, :show] do
      resource :main_portfolio, only:[:show, :update]
      resources :activities, only:[:index]
      resources :drawings, only: [:index]
      resources :portfolios, only: [:index]
      resources :favorite_drawings, only: [:index]
      resources :user_friends, only: [:index]
      resource :profile, only: [:update, :show]
    end
    resources :notifications, only:[:index, :update]
    resources :my_feeds, only:[:index]
    resources :top_drawings, only:[:index]
    resources :drawings, except: [:index]
    resources :portfolios, except: [:index]
    resources :favorite_drawings, except: [:index]
    resources :user_friends, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy, :update]
    resources :tags,  only: [:create, :destroy]
    resources :hearts, only: [:create, :destroy]
    resources :searches, only: [:index]
  end
end
