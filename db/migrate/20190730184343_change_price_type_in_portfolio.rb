class ChangePriceTypeInPortfolio < ActiveRecord::Migration[5.2]
  def change
    change_column :portfolios, :price, :decimal
  end
end
