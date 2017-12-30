# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.delete_all

Book.create!(
  [
    {author: "Milan Kundera",
     title: "Ignorance",
     country: "Czech Republic",
     description: "..."},
    {author: "Lu Xun",
     title: "Diary of a Madman",
     country: "China",
     description: "..."},
    {author: "Bessie Head",
     title: "When Rain Clouds Gather",
     country: "Botswana",
     description: "..."}
  ]
  )

puts "Books seeded!"