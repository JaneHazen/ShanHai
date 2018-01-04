class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :booklists
  has_many :books
  has_many :books, through: :booklist
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
