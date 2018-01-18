class UnreadbooksController < ApplicationController

  skip_before_action :verify_authenticity_token


  def index
    @boolean = Unreadbook.where( user_id: params[:user_id], book_id: params[:book_id])


    render json: @boolean
  end

  def create
    p "CREATED" * 100
    @unreadbook = Unreadbook.new(user_id: params[:user_id], book_id: params[:user_id], read: true)
    if @unreadbook.save
      sign_in :unreadbook, @unreadbook
      render json: @unreadbook
    else
      p "NO" * 1000
      warden.custom_failure!
      render json: { error: 'signup error' }, status: :unprocessable_entity
    end
  end

  def destroy
    @unreadbook = Unreadbook.find_by(user_id: params[:user_id], book_id: params[:book_id])
    p "DELETED" * 100
    @unreadbook.destroy
  end

  def unreadbook_params
    params.require(:unreadbook).permit(:user_id, :book_id, :read)
  end

end
