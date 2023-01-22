require "application_system_test_case"

class ProductsTest < ApplicationSystemTestCase
  setup do
    @product = products(:one)
  end

  test "visiting the index" do
    visit products_url
    assert_selector "h1", text: "Products"
  end

  test "should create product" do
    visit products_url
    click_on "New product"

    fill_in "Available size", with: @product.available_size
    fill_in "Description", with: @product.description
    fill_in "Discount", with: @product.discount
    fill_in "Img path", with: @product.img_path
    fill_in "Name", with: @product.name
    fill_in "Number of valorations", with: @product.number_of_valorations
    fill_in "Previous price", with: @product.previous_price
    fill_in "Price", with: @product.price
    fill_in "Uuid", with: @product.uuid
    fill_in "Valorations", with: @product.valorations
    click_on "Create Product"

    assert_text "Product was successfully created"
    click_on "Back"
  end

  test "should update Product" do
    visit product_url(@product)
    click_on "Edit this product", match: :first

    fill_in "Available size", with: @product.available_size
    fill_in "Description", with: @product.description
    fill_in "Discount", with: @product.discount
    fill_in "Img path", with: @product.img_path
    fill_in "Name", with: @product.name
    fill_in "Number of valorations", with: @product.number_of_valorations
    fill_in "Previous price", with: @product.previous_price
    fill_in "Price", with: @product.price
    fill_in "Uuid", with: @product.uuid
    fill_in "Valorations", with: @product.valorations
    click_on "Update Product"

    assert_text "Product was successfully updated"
    click_on "Back"
  end

  test "should destroy Product" do
    visit product_url(@product)
    click_on "Destroy this product", match: :first

    assert_text "Product was successfully destroyed"
  end
end
