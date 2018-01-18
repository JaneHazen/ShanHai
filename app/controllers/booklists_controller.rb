class BooklistsController < ApplicationController
  before_action :set_booklist, only: [:show, :edit, :update, :destroy]

  # GET /booklists
  # GET /booklists.json
  def index
    p "index" * 1000
    p params
    @comments = Booklist.where(book_id: params[:book_id])
    p @comments
    render json: @comments
  end

  def getcomments
    p "getcomments" * 10000
    p "THIS IS PARAMS:::"
    p params
    @comments = Booklist.where(book_id: params[:book_id])
    p @comments
    render json: @comments
  end

  # GET /booklists/1
  # GET /booklists/1.json
  def show
  end

  # GET /booklists/new
  def new
    @booklist = Booklist.new
  end

  # GET /booklists/1/edit
  def edit
  end

  # POST /booklists
  # POST /booklists.json
  def create
    @booklist = Booklist.new(booklist_params)

    respond_to do |format|
      if @booklist.save
        format.html { redirect_to @booklist, notice: 'Booklist was successfully created.' }
        format.json { render :show, status: :created, location: @booklist }
      else
        format.html { render :new }
        format.json { render json: @booklist.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /booklists/1
  # PATCH/PUT /booklists/1.json
  def update
    respond_to do |format|
      if @booklist.update(booklist_params)
        format.html { redirect_to @booklist, notice: 'Booklist was successfully updated.' }
        format.json { render :show, status: :ok, location: @booklist }
      else
        format.html { render :edit }
        format.json { render json: @booklist.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /booklists/1
  # DELETE /booklists/1.json
  def destroy
    @booklist.destroy
    respond_to do |format|
      format.html { redirect_to booklists_url, notice: 'Booklist was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

    # Use callbacks to share common setup or constraints between actions.
    def set_booklist
      @booklist = Booklist.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def booklist_params
      params.require(:booklist).permit(:user_id, :book_id, :read, :comment)
    end
end
