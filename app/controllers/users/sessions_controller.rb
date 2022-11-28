# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  before_action :authenticate_user_using_x_auth_token, only: :destroy
  before_action :authenticate_user!, only: :destroy

  def create
    @user = User.find_by(email: login_params[:email].downcase)
    if @user.present? && password_correct?
      session[:user_id] = @user.id
      render status: :ok, json: {
        user_first_name: @user[:first_name],
        user_last_name: @user[:last_name]
      }
    else
      render status: :unauthorized, json: {
        notice: t('auth.invalid_credentials')
      }
    end
  end

  def destroy
    @current_user = nil
    session[:user_id] = nil
  end

  private

  def login_params
    params.require(:login).permit(:email, :password, :name)
  end

  def password_correct?
    @user.authenticate(login_params[:password])
  end
end
