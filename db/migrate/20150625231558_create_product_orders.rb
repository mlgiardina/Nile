class CreateProductOrders < ActiveRecord::Migration
  def change
    create_table :product_orders do |t|
      t.belongs_to :user, index: true, foreign_key: true, null: false
      t.belongs_to :product, index: true, foreign_key: true, null: false
      t.integer :quantity, null: false, default: 0
      t.timestamps null: false
    end
  end
end
