# frozen_string_literal: true

class BaseController < ApplicationController
  # before_action :authenticate_user_using_x_auth_token
  before_action :authenticate_user!
end
