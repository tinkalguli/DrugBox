# frozen_string_literal: true

class CreateInvitations < ActiveRecord::Migration[7.0]
  def change
    create_table :invitations do |t|
      t.string :reciever
      t.string :link
      t.references :sender, index: true, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
