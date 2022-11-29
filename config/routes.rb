# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    devise_for :users, controllers: { sessions: :sessions },
                       path_names: { sign_in: :login, sign_out: :logout }
    resource :user, only: :show do
      post :invite, on: :collection
    end
  end

  root 'home#index'
  get '*path', to: 'home#index', via: :all
end
