class Itinerary < ActiveRecord::Base
	validates_presence_of :name, :description, :start_date, :end_date

	belongs_to :user
	has_many :events

	# def convert_string_to_time(a)
	# 	b = Date.strptime(a," %m/%d/%Y")
	# 	b.to_datetime
	# end
	
end
