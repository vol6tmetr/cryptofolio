# frozen_string_literal: true

module Api
  module V1
    class PortfolioController < ApplicationController
      def index
        render(
          json: User.find_by(email: params['email']).portfolio.portfolio_cryptocurrencies.to_json
        )
      end
    end
  end
end
