class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.boolean :completed, null: false, default: false

      t.timestamps null: false
    end
  end
end
