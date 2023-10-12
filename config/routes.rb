Rails.application.routes.draw do
  # Defines the root path route ("/")
  root 'root#index'

  namespace :api do
  get 'greetings/random_greeting'
  # get '/random_greeting', to: 'greetings#random_greeting'
  end
end
