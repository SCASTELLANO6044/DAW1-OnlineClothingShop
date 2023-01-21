class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.float :previous_price
      t.float :price
      t.float :valoration
      t.float :number_of_valorations
      t.string :available_sizes
      t.string :img_path
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
