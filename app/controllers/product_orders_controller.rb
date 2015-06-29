class ProductOrdersController < ApplicationController

  def new
  end

  def create
    authenticate_user!
    ProductOrder.create(order_id: params[:order_id], product_id: params[:product_id], quantity: params[:quantity])
    redirect_to '/'
  end

  def index
    authenticate_user!
    @cart_items = User.find(session[:user_id]).orders.where(completed:false).first.products
    @cart = cart
  end

  def update
    authenticate_user!
    old_quantity = ProductOrder.find(params[:id]).quantity
    if params[:specify] == "remove"
      new_quantity = old_quantity - 1
    elsif params[:specify] == "add"
      new_quantity = old_quantity + 1
    end

    if new_quantity == 0
      ProductOrder.delete(params[:id])
      return redirect_to :back
    end

    ProductOrder.update(params[:id], quantity: new_quantity)
    redirect_to :back
  end
end
