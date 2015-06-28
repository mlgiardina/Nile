class ProductOrdersController < ApplicationController

  def new

  end
  def create
    ProductOrder.create(order_id: cart.id, product_id: params[:product_id], quantity: params[:quantity])
  end
end
