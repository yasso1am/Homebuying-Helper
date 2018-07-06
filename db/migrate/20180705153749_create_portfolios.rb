class CreatePortfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :portfolios do |t|
      t.integer :cash_on_hand
      t.integer :ira
      t.integer :gifts
      t.integer :retirement
      t.integer :other
      t.integer :income_a
      t.integer :income_b
      t.string :additional_debt
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
