class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render products_path
    else
      redirect_to login_path, alert: "Incorrect email and/or password"
    end
  end

  def destroy
    session[:user_id] = nil
    render products_path
  end
end
