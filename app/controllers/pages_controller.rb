class PagesController < ApplicationController
  def home

  end

  def are_we_there_yet
    if current_user
      render json: @user
    else
      return ""
    end
  end
end
