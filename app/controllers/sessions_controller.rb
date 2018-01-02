class SessionsController < Devise::SessionsController

  # POST /v1/login
  def create
    @user = User.find_by_email(user_params[:email])
    return invalid_login_attempt unless @user

    if @user.valid_password?(user_params[:password])
      sign_in :user, @user
      render json: @user
    else
      invalid_login_attempt
    end
  end

  def destroy
    p "HELLO" *100
    p params
    @user = User.find_by_email(user_params[:email])
    sign_out(@user)
    render :json=> {:success=>true}
  end


  private

  def verify_signed_out_user
    if all_signed_out?
      set_flash_message! :notice, :already_signed_out

      respond_to_on_destroy
    end
  end

    def invalid_login_attempt
      warden.custom_failure!
      render json: {error: 'invalid login attempt'}, status: :unprocessable_entity
    end

    def user_params
       params.require(:user).permit(:email, :password)
    end

end