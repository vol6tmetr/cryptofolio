# frozen_string_literal: true

module Api
  module V1
    class PortfolioController < ApplicationController
      def add
        user_portfolio_cryptocurrencies.create(name: params['name'], amount: params['amount'].to_f)

        current_user.portfolio.price += Cryptocurrency.find_by(name: params['name']).price * params['amount'].to_f
        current_user.portfolio.save

        render(json: { portfolio: user_portfolio_cryptocurrencies, price: current_user.portfolio.price })
      end

      def remove
        portfolio_item = user_portfolio_cryptocurrencies.find_by(id: params['item_id'])
        current_user.portfolio.price -= Cryptocurrency.find_by(name: portfolio_item.name).price * portfolio_item.amount
        current_user.portfolio.save
        portfolio_item.destroy

        render(json: { portfolio: user_portfolio_cryptocurrencies, price: current_user.portfolio.price })
      end

      private

      def user_portfolio_cryptocurrencies
        current_user.portfolio.portfolio_cryptocurrencies
      end
    end
  end
end
