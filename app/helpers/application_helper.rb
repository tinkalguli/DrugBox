# frozen_string_literal: true

module ApplicationHelper
  def client_props
    {
      user: current_user
    }
  end
end
