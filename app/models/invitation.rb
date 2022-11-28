# frozen_string_literal: true

class Invitation < ApplicationRecord
  belongs_to :sender, class_name: 'User', foreign_key: 'sender_id'
  before_save :add_invite_link

  private

  def add_invite_link
    self.link = invite_link
  end

  def invite_link
    "#{$host}/signup"
  end
end
