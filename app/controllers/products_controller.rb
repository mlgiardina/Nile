class ProductsController < ApplicationController

  def index
    page = params.fetch(:page, 0).to_i
    per_page = params.fetch(:per_page, 15).to_i
    @products = Product.limit(per_page).offset(page * per_page)
    @cart = cart
  end

end
