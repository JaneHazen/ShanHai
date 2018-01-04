class Book < ApplicationRecord
  has_many :votes, as: :votable
  belongs_to :user
  has_many :booklists

  validates :title, uniqueness: true

  validates :user_id, :title, :author, :country, presence: true

  before_save :default_vote_count

  def upvote
    self.votes += 1
  end

  def default_vote_count
    self.votes ||= 0
  end

end
