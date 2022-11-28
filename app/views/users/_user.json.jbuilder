# frozen_string_literal: true

json.extract! user, :id, :email, :name
json.token user.generate_jwt
