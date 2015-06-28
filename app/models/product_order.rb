class ProductOrder < ActiveRecord::Base
  belongs_to :product
  belongs_to :order
  validates_uniqueness_of :product_id, scope: :order_id

  def create
    po = ProductOrder.new(order_id: params[:order_id], product_id: params[:product_id], quantity: params[:quantity])
  end

end
