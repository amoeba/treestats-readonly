# frozen_string_literal: true

source "https://rubygems.org"
ruby "2.6.4"

gem "rake"
gem "rack"
gem "sinatra"
gem "sinatra-sequel", git: "https://github.com/amoeba/sinatra-sequel"
gem "sequel-rake"

group :production do
  gem "pg"
end

group :development do
  gem "sqlite3"
end

group :test do
  gem "minitest"
  gem "rack-test"
end

gem "standard", group: [:development, :test]
