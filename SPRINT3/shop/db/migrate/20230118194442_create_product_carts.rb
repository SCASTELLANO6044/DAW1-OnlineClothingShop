class CreateProductCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :product_carts do |t|
      t.string :name
      t.float :price
      t.integer :quantity
      t.string :imgPath

      t.timestamps
    end
  end
end
