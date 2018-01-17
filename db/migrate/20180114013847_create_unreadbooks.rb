class CreateUnreadbooks < ActiveRecord::Migration[5.1]
  def change
    create_table :unreadbooks do |t|
      t.references :user, foreign_key: true
      t.references :book, foreign_key: true
      t.boolean :read, default: false

      t.timestamps
    end
  end
end
