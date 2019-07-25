module Api::V1
  class CurrenciesController < ApplicationController
    def all
      data = HTTParty.get('https://api.coinmarketcap.com/v1/ticker/')

      render json: data.body
    end
  end
end