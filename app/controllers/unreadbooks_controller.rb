class UnreadbooksController < ApplicationController

  skip_before_action :verify_authenticity_token


  def index
    p "IN UNREADBOOKS CONTROLLER" *50
    p params
    @boolean = Unreadbook.where(country: params[:country], user_id: params[:user_id], book_id: params[:user_id])

    render json: @boolean
  end

  def create
    p "UNREAD" * 100
    @unreadbook = unreadbook.new(country: params[:country], user_id: params[:user_id], book_id: params[:user_id], read: true)
    if @unreadbook.save
      sign_in :unreadbook, @unreadbook
      render json: @unreadbook
    else
      p "NO" * 1000
      warden.custom_failure!
      render json: { error: 'signup error' }, status: :unprocessable_entity
    end
  end

  def unreadbook_params
    params.require(:unreadbook).permit(:user_id, :book_id, :country, :read)
  end

end
