# frozen_string_literal: true

module Api
  module V1
    class RegistrationController < ApplicationController
      skip_before_action :authenticate_request

      def register
        User.create(
          name: params['name'],
          email: params['email'],
          password: params['password'],
          portfolio: Portfolio.create(price: 0)
        )

        render json: user_data(AuthenticateUser.call(params[:email], params[:password]))
      end

      private

      def user_data(command)
        { auth_token: command.result.first,
          email: command.result.last.email,
          portfolio: command.result.last.portfolio.portfolio_cryptocurrencies }
      end
    end
  end
end
