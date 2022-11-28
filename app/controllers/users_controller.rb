# frozen_string_literal: true

class UsersController < ApplicationController
  # before_action :authenticate_user!

  def invite
    @invitation = Invitation.create!(
      invitation_params.merge(sender: current_user.email)
    )
    InvitationMailer.with(invitation: @invitation).new_invitation_email.deliver_later
    respond_with_success('Invitation sent successfully')
  end

  def show
    puts '----------------dkhbhd---------'
    render
  end

  private

  def invitation_params
    params.require(:invitation).permit(:reciever)
  end
end
