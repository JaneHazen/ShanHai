class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :author, null: false
      t.string :title, null: false
      t.string :country, null: false
      t.text :description

      t.timestamps
    end
  end
end
