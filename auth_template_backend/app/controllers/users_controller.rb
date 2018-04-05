class UsersController < ApplicationController
  def create
    @user = User.new(username: params[:username], password: params[:password])
    if @user.save
      jwt = issue_token({user_id: @user.id})
      render json: {user: @user, jwt: jwt}
    end
  end


  def get_posts
    render json: current_user.posts
  end
end