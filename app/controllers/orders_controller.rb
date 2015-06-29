class OrdersController < ApplicationController
  def create
    authenticate_user!
    Order.create(params[id])
  end

  def update
    authenticate_user!
    user = User.find(session[:user_id])
    @orders = user.orders
    order = Order.find(params[:id])
    order.update(completed: params[:completed])
    CompleteOrderMailer.order_confirmation(user).deliver_now
    flash[:notice] = "Order Submitted!"
    render 'index'
  end

  def index
    authenticate_user!
    @orders = User.find(session[:user_id]).orders
  end

  def admin
    user = User.find(session[:user_id])
    if user.admin == false
      flash[:alert] = "You are not an admin."
      render 'index'
    else
      @users = User.all
      render 'admin'
    end
  end

end
