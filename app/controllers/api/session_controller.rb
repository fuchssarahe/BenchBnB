class Api::SessionController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login!(@user)
      render '../users/show'
    else
      render json: {base: ['invalid credentials']}, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render {}.to_json
    else
      render json: {base: ['no user logged in']}, status: 404
    end
  end

  def show
    @user = current_user
    render '../users/show'
  end
end
