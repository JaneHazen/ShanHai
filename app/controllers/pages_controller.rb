class PagesController < ApplicationController
  def home
  end

  def are_we_there_yet
    if current_user
      render json: current_user
    else
      render json: {user: nil}
    end
  end

end
