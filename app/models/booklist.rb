class Booklist < ApplicationRecord
  belongs_to :user
  belongs_to :book
  has_many :votes, as: :votable
end
