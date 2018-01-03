class Book < ApplicationRecord
  has_many :votes, as: :votable
end
