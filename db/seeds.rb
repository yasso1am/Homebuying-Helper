@user = User.find(1)

House.create(
  name: "Andrew A",
  purchase_price: 200000,
  loan_term: 30,
  down_payment: 10,
  payments_per_year: 12,
  interest_rate: 4.5,
  user_id: @user.id
)

House.create(
  name: "Andrew B",
  purchase_price: 250000,
  loan_term: 30,
  down_payment: 20,
  payments_per_year: 12,
  interest_rate: 3.5,
  user_id: @user.id
)

puts "seeded"