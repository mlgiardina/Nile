json.array!(@products) do |product|
  json.extract! product, :name, :description, :image, :price
  json.url product_url(product, format: :json)
end