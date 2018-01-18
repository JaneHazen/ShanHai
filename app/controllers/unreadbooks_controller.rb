class UnreadbooksController < ApplicationController

  skip_before_action :verify_authenticity_token


  def index
    p "UNREAD BOOKS CONTROLLER" * 100
    p params
    p params[:user_id]
    p params[:book_id]
    @boolean = Unreadbook.where( user_id: params[:user_id], book_id: params[:book_id])
    render json: @boolean
  end

  def make_a_book
    p "YES" * 1000
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
    p "CREATED" * 100
    p params
    p params[:params]
    p params[:params][:user_id]
    p params[:params][:book_id]
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
    p "DELETED" * 100
    @unreadbooks.delete_all
  end

  def unreadbook_params
    params.require(:unreadbook).permit(:user_id, :book_id, :read)
  end

end
