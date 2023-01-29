class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.float :price
      t.float :discount
      t.float :previous_price
      t.float :valorations
      t.float :number_of_valorations
      t.string :available_size
      t.string :img_path
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
