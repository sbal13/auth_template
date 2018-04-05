class AuthController < ApplicationController
  def create
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params[:password])
      jwt = issue_token({user_id: @user.id})
      render json: {user: @user, jwt: jwt}
    else 
      render json: {error: "Hold your horses!"}
    end
  end

  def show
    if current_user
      render json: current_user
    else 
      render json: {error: "Hold your horses!"}
    end
  end
end