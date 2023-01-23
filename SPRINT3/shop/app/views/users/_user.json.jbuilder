json.extract! user, :id, :email, :name, :surname, :birthday, :address, :credit_card, :created_at, :updated_at
json.url user_url(user, format: :json)
