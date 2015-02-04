class Itinerary < ActiveRecord::Base
	validates_presence_of :name, :description, :start_date, :end_date

	belongs_to :user
	has_many :events

	def date_range
		date_array = []
		s = Date.strptime(start_date, "%m/%d/%Y")
		e = Date.strptime(end_date, "%m/%d/%Y" )
		s_range = s.to_date
		e_range = e.to_date
		(s_range..e_range).each do |i|
			date_array.push(i)
		end
		return date_array
	end

	# def convert_string_to_time(a)
	# 	b = Date.strptime(a," %m/%d/%Y")
	# 	a.to_datetime b.to_datetime
	#   a.to_date b.to_date
	# end

	#get number between dates and individual dates

	#@days = date_range.count
	#@days.each do

	# var array = []

	#(a..b).each do |i|
	# puts i 
	# end 

	#(a..b).each do |i|
	# arr.push(i) 
	# end 

	# arr.count

	#each date needs to know what date and what time
	# create time range
	
end
