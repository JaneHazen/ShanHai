class Booklist < ApplicationRecord
  belongs_to :user
  belongs_to :book
  has_many :votes, as: :votable

  validates :user_id, :book_id, presence: true

  before_save :default_vote_count

  def upvote
    self.votes += 1
  end

  def default_vote_count
    self.votes ||= 0
  end
end
