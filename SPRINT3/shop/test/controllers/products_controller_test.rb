require "test_helper"

class ProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @product = products(:one)
  end

  test "should get index" do
    get products_url, as: :json
    assert_response :success
  end

  test "should create product" do
    assert_difference("Product.count") do
      post products_url, params: { product: { available_size: @product.available_size, category_id: @product.category_id, description: @product.description, discount: @product.discount, img_path: @product.img_path, name: @product.name, number_of_valorations: @product.number_of_valorations, previous_price: @product.previous_price, price: @product.price, valorations: @product.valorations } }, as: :json
    end

    assert_response :created
  end

  test "should show product" do
    get product_url(@product), as: :json
    assert_response :success
  end

  test "should update product" do
    patch product_url(@product), params: { product: { available_size: @product.available_size, category_id: @product.category_id, description: @product.description, discount: @product.discount, img_path: @product.img_path, name: @product.name, number_of_valorations: @product.number_of_valorations, previous_price: @product.previous_price, price: @product.price, valorations: @product.valorations } }, as: :json
    assert_response :success
  end

  test "should destroy product" do
    assert_difference("Product.count", -1) do
      delete product_url(@product), as: :json
    end

    assert_response :no_content
  end
end
