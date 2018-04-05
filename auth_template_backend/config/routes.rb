Rails.application.routes.draw do
  post '/signup', to: "users#create"
  post '/login', to: "auth#create"
  get 'get_user', to: "auth#show"
end
