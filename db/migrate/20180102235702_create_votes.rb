class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :value, null: false, default: 0
      t.boolean :upvote, null:false
      t.references :user, foreign_key: true, null: false
      t.references :votable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
