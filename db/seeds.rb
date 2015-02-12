# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Event.create(title:"Itinerary 2 Test",start: "2015-02-25T05:05:06+07:00", itinerary_id: 20 )

Event.create(title: "COLOR Test", description: "Actually Austin bespoke viral, hashtag asymmetrical", start: "2015-02-25T05:05:06+07:00", end: "2015-02-24T06:05:06+07:00", url:"/test", color:"black", textcolor:"red")
