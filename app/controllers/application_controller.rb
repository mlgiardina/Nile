class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  def index
  end

  def current_user
    current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authenticate_user!
    if current_user == nil
      render json: { message: "error3" }, status: 511
    end

  end

  def cart
    if current_user
      current_user.orders.find_or_create_by(completed: false)
    end
  end


end
