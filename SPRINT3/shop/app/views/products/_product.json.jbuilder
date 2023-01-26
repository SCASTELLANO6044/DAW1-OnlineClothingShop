json.extract! product, :id, :name, :description, :price, :discount, :previous_price, :valorations, :number_of_valorations, :available_size, :img_path, :category_id, :created_at, :updated_at
json.url product_url(product, format: :json)
