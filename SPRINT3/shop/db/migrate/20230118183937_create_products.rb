class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.float :previousPrice
      t.float :price
      t.float :valoration
      t.float :numberOfValorations
      t.string :availableSizes
      t.string :imgPath
      t.integer :category_id

      t.timestamps
    end
  end
end
