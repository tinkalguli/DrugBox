class SessionsController < Devise::SessionsController
  def create
    user = User.find_by_email(login_params[:email])

    if user&.valid_password?(login_params[:password])
      @current_user = user
    else
      respond_with_error(t('auth.invalid_credentials'))
    end
  end

  private

  def login_params
    params.require(:login).permit(:email, :password)
  end
end
