class OrdersController < ApplicationController
  def create
    authenticate_user!
    Order.create(params[id])
  end

  def update
    @orders = User.find(session[:user_id]).orders
    authenticate_user!
    order = Order.find(params[:id])
    order.update(completed: params[:completed])
    flash[:notice] = "Order Submitted!"
    render 'index'
  end

  def index
    authenticate_user!
    @orders = User.find(session[:user_id]).orders
  end
end
