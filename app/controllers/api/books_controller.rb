class Api::BooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    p "HEYO" * 100
    @books = Book.all
    render json: @books
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render json: @book
    else
      warden.custom_failure!
      render json: { error: 'signup error' }, status: :unprocessable_entity
    end
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
    render json: @book
  end

  def book_params
       params.require(:book).permit(:author, :title, :country, :description, :user_id)
    end
end
