class UnreadbooksController < ApplicationController

  skip_before_action :verify_authenticity_token


  def index
    @boolean = Unreadbook.where( user_id: params[:user_id], book_id: params[:book_id])
    render json: @boolean
  end

  def make_a_book
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

  def create

    @unreadbook = Unreadbook.new(user_id: params[:params][:user_id], book_id: params[:params][:book_id])
    if @unreadbook.save
      render json: @unreadbook
    else
      p "NO" * 1000
      render json: { error: 'signup error' }, status: :unprocessable_entity
    end
  end

  def destroy
    @unreadbooks = Unreadbook.where(user_id: params[:user_id], book_id: params[:book_id])
    @unreadbooks.delete_all
  end

  def unreadbook_params
    params.require(:unreadbook).permit(:user_id, :book_id, :read)
  end

end
