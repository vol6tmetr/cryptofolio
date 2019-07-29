# frozen_string_literal: true

class Cryptocurrency < ApplicationRecord
  def self.update_data
    data = HTTParty.get('https://api.coinmarketcap.com/v1/ticker/')

    JSON.parse(data.body).each do |currency|
      Cryptocurrency.find_or_create_by(
        name: currency.fetch('name'), symbol: currency.fetch('symbol')
      ).tap do |found_currency|
        found_currency.market_cap = currency.fetch('market_cap_usd', 0)
        found_currency.price = currency.fetch('price_usd', 0)
        found_currency.save
      end
    end
  end
end
