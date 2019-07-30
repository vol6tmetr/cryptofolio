# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'registration', to: 'registration#register'
      post 'authenticate', to: 'authentication#authenticate'
      get 'currencies', to: 'currencies#index'
      post 'portfolio', to: 'portfolio#add'
      delete 'portfolio/currency', to: 'portfolio#remove'
    end
  end
end
