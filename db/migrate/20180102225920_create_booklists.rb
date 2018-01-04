class CreateBooklists < ActiveRecord::Migration[5.1]
  def change
    create_table :booklists do |t|
      t.references :user, foreign_key: true, null: false
      t.references :book, foreign_key: true, null: false
      t.boolean :read
      t.text :comment

      t.timestamps
    end
  end
end
