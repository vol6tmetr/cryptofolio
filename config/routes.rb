# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'authenticate', to: 'authentication#authenticate'
      get 'currencies', to: 'currencies#index'
      get 'portfolio', to: 'portfolio#index'
    end
  end
end
