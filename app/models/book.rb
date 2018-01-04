class Book < ApplicationRecord
  has_many :votes, as: :votable
  belongs_to :user
  has_many :booklists

  validates :title, uniqueness: true

  validates :user_id, :title, :author, :country, presence: true

end
