class CreateCryptocurrencies < ActiveRecord::Migration[5.2]
  def change
    create_table :cryptocurrencies do |t|
      t.string :name
      t.string :symbol
      t.float :price

      t.timestamps
    end
  end
end
