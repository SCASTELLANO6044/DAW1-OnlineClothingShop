class Api::CategoriesController < ApplicationController
  def index
    categories = Category.all()
    render json:categories, include: [:products], status: 200
  end
end
