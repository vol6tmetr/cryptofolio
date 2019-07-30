# frozen_string_literal: true

module Api
  module V1
    class PortfolioController < ApplicationController
      def add
        user_portfolio_cryptocurrencies.create(name: params['name'], amount: params['amount'])

        render(json: user_portfolio_cryptocurrencies.to_json)
      end

      def remove
        user_portfolio_cryptocurrencies.find_by(id: params['item_id']).destroy

        render(json: user_portfolio_cryptocurrencies.to_json)
      end

      private

      def user_portfolio_cryptocurrencies
        current_user.portfolio.portfolio_cryptocurrencies
      end
    end
  end
end
