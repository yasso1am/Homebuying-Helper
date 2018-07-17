class CreateHouses < ActiveRecord::Migration[5.1]
  def change
    create_table :houses do |t|
      t.string :name
      t.integer :payments_per_year
      t.integer :loan_term
      t.integer :purchase_price
      t.integer :loan_amount
      t.integer :down_payment_amount
      t.float :down_payment_percent
      t.integer :pmi
      t.float :interest_rate
      t.integer :insurance_monthly
      t.integer :property_tax_annual
      t.integer :property_tax_monthly
      t.integer :hoa_monthly
      t.integer :monthly_principal_interest
      t.integer :monthly_payment_total
      t.integer :total_interest
      t.integer :total_principal_interest
      t.integer :move_in_price
      t.integer :closing_cost
      t.integer :discount_points
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
