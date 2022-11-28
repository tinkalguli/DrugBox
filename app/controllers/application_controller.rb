# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include ApiResponders
  include ApiRescuable

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :load_current_user_id

  protect_from_forgery with: :null_session

  respond_to :json

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  def load_current_user_id
    token = request.headers['Authorization']
    return unless token.present?

    jwt_payload = JWT.decode(token, Rails.application.secrets.secret_key_base).first
    @current_user_id = jwt_payload['id']
  rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
    respond_with_error(t('auth.unauthorized'), :unauthorized)
  end

  def authenticate_user!(_options = {})
    respond_with_error(t('auth.unauthorized'), :unauthorized) unless signed_in?
  end

  def current_user
    @current_user ||= super || User.find_by(id: @current_user_id)
  end

  def signed_in?
    @current_user_id.present?
  end
end
