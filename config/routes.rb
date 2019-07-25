Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'currencies/all', to: 'currencies#all'
    end
  end
end
