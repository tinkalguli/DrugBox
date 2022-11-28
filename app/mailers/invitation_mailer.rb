class InvitationMailer < ApplicationMailer
  def new_invitation_email
    @invitation = params[:invitation]

    mail(to: "#{@invitation.reciever}", subject: "#{@invitation.sender.name} is inviting you!")
  end
end
