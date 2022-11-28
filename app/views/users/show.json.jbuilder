json.user do |json|
  json.partial! 'users/user', user: current_user
  json.is_log_in current_user.present?
end
