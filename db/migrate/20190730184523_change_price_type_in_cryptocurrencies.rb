class ChangePriceTypeInCryptocurrencies < ActiveRecord::Migration[5.2]
  def change
    change_column :cryptocurrencies, :price, :decimal
  end
end
