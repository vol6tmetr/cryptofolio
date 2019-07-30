# frozen_string_literal: true

class Portfolio < ApplicationRecord
  belongs_to :user

  has_many :portfolio_cryptocurrencies, dependent: :destroy
end
