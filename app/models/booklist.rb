class Booklist < ApplicationRecord
  belongs_to :user
  belongs_to :book
  has_many :votes, as: :votable

  validates :user_id, :book_id, presence: true
end
