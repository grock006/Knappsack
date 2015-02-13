class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :init_user

  def init_user
    @user = User.new
  end

  def index

  end

  def authorize
    redirect_to root_path unless current_user
  end

  def current_user
    	if session[:user_id]
    	 @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
  end

  helper_method :current_user


  def authorize
    redirect_to login_path unless current_user
  end

  helper_method :authorize

end

