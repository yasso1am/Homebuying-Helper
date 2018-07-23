class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  # before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!, if: proc { request.controller_class.parent == Api }
  
  def render_errors(record)
    render json: { errors: record.errors.full_messages }, status: 422
  end

  protected
    # def configure_permitted_parameters
    #   devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name])
    # end
end
