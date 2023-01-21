class Api::CategoriesController < ApplicationController
  def index
    categories = Category.all()
    //TODO
    render json:categories, status: 200
  end
end
