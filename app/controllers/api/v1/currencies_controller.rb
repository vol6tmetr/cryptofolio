# frozen_string_literal: true

module Api
  module V1
    class CurrenciesController < ApplicationController
      def index
        render json: Cryptocurrency.all.order(market_cap: :desc).to_json
      end
    end
  end
end
