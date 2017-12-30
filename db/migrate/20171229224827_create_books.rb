class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :author
      t.string :title
      t.string :country
      t.text :description

      t.timestamps
    end
  end
end
