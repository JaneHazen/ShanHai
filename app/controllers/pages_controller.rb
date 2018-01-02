class PagesController < ApplicationController
  def home
  end

  def are_we_there_yet
    p "*" *100
    if current_user
      p "HELLO"
      render json: current_user
    else
      p "NOPE"
      render json: {user: nil}
    end
  end

end
