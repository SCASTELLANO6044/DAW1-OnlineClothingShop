json.extract! product, :id, :uuid, :name, :description, :price, :discount, :previous_price, :valorations, :number_of_valorations, :available_size, :img_path, :created_at, :updated_at
json.url product_url(product, format: :json)
