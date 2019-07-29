class AddMarketCapToCryptocurrency < ActiveRecord::Migration[5.2]
  def change
    add_column :cryptocurrencies, :market_cap, :float
  end
end
