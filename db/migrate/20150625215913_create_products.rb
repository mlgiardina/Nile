class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :description, null: false, default: "product"
      t.integer :inventory, null: false, default: 0
      t.integer :price, null: false, default: 1

      t.timestamps null: false
    end
  end
end
