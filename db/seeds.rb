100.times do
  Product.create(name: Faker::Commerce.product_name,
                 description: Faker::Company.bs,
                 inventory: (20..100).to_a.sample,
                 price: (20..100).to_a.sample,
                 image: "http://placehold.it/100" )
end
