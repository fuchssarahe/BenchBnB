class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  def current_user
    @current_user ||= User.find(session_token: session[session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil;
  end

  def login!(user)
    session[:session_token] = reset_session_token!
  end

  protected
  def user_params
    params.require(:user).permit(:username, :password)
  end

end
