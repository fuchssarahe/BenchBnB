Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, default: { format: 'json' } do
    resources :benches, only: [:create, :index]
    resources :users, only: :create
    resource :session, only: [:create, :destroy, :show]
  end
end
