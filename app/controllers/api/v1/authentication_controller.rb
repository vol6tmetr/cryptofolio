# frozen_string_literal: true

module Api
  module V1
    class AuthenticationController < ApplicationController
      skip_before_action :authenticate_request

      def authenticate
        command = AuthenticateUser.call(params[:email], params[:password])

        if command.success?
          render json: user_data(command)
        else
          render json: { error: command.errors }, status: :unauthorized
        end
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
