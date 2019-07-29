class CreatePortfolioCryptocurrencies < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolio_cryptocurrencies do |t|
      t.string :name
      t.float :amount
      t.references :portfolio, foreign_key: true

      t.timestamps
    end
  end
end
