json.extract! product, :id, :name, :previous_price, :price, :valoration, :number_of_valorations, :available_sizes, :img_path, :category_id, :created_at, :updated_at
json.url product_url(product, format: :json)
