Rails.application.routes.draw do
  root 'static#index'
  namespace :api do
    namespace :v1 do
      get  'characters/index'
      post 'characters/find'
    end
  end
end
