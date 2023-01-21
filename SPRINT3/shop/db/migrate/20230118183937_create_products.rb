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
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
