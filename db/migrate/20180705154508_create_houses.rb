class CreateHouses < ActiveRecord::Migration[5.1]
  def change
    create_table :houses do |t|
      t.integer :purchase_price
      t.string :name
      t.integer :loan_term
      t.float :down_payment
      t.float :interest_rate
      t.integer :payments_per_year
      t.float :pmi
      t.integer :insurance_monthly
      t.integer :property_tax_annual
      t.integer :hoa_monthly
      t.float :total_interest
      t.float :total_principal_interest
      t.integer :total_monthly
      t.integer :move_in_price
      t.integer :closing_cost
      t.integer :discount_points
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
