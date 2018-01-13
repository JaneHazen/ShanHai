class Api::BooksController < ApplicationController

  def index
    @books = Book.all
    render json: @books
  end

  def country
    @books = Book.where(country: params[:country])

    render json: @books
  end

  def book_id
    @book = Book.find(params[:id])
    render json: @book
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
     p "*" * 100
     p params
       params.require(:book).permit(:author, :title, :country, :description, :user_id)
    end
end
