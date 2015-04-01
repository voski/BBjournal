Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:create, :destroy, :index, :show, :update]
  end
end
