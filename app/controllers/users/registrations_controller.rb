# # frozen_string_literal: true

# class Users::RegistrationsController < Devise::RegistrationsController
#   def create
#     User.create!(user_params)
#     respond_with_success(t('auth.success_sign_up'), :ok)
#   end

#   private

#   def user_params
#     params.require(:user).permit(:email, :name, :password, :confirm_password)
#   end
# end
