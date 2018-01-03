json.extract! booklist, :id, :user_id, :book_id, :read, :comment, :created_at, :updated_at
json.url booklist_url(booklist, format: :json)
