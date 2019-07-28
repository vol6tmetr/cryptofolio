# frozen_string_literal: true

namespace :cryptocurrencies do
  desc 'Update cryptocurrencies data'

  task update: :environment do
    puts 'Updating cryptocurrencies data'
    Cryptocurrency.update_data
    puts 'Updated cryptocurrencies data'
  end
end
