class Api::BooksController < ApplicationController
    protect_from_forgery with: :null_session

  def index
    @books = Book.all
    render json: @books
  end
end
