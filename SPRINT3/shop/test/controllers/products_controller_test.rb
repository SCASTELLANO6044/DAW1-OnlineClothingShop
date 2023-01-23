require "test_helper"

class ProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @product = products(:one)
  end

  test "should get index" do
    get products_url
    assert_response :success
  end

  test "should get new" do
    get new_product_url
    assert_response :success
  end

  test "should create product" do
    assert_difference("Product.count") do
      post products_url, params: { product: { available_size: @product.available_size, description: @product.description, discount: @product.discount, img_path: @product.img_path, name: @product.name, number_of_valorations: @product.number_of_valorations, previous_price: @product.previous_price, price: @product.price, uuid: @product.uuid, valorations: @product.valorations } }
    end

    assert_redirected_to product_url(Product.last)
  end

  test "should show product" do
    get product_url(@product)
    assert_response :success
  end

  test "should get edit" do
    get edit_product_url(@product)
    assert_response :success
  end

  test "should update product" do
    patch product_url(@product), params: { product: { available_size: @product.available_size, description: @product.description, discount: @product.discount, img_path: @product.img_path, name: @product.name, number_of_valorations: @product.number_of_valorations, previous_price: @product.previous_price, price: @product.price, uuid: @product.uuid, valorations: @product.valorations } }
    assert_redirected_to product_url(@product)
  end

  test "should destroy product" do
    assert_difference("Product.count", -1) do
      delete product_url(@product)
    end

    assert_redirected_to products_url
  end
end
