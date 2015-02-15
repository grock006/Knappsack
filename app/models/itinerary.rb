class Itinerary < ActiveRecord::Base
	# validates_presence_of :name, :description, :start_date, :end_date
	# validates :name, uniqueness: true
	# validates_date :start_date, :on_or_after => lambda { Date.current}
	# validates_date :end_date, :on_or_after => :start_date

	belongs_to :user
	has_many :events

	def date_range
		date_array = []
		s = start_date
		e = end_date
		(s..e).each do |i|
			date_array.push(i)
		end
		return date_array
	end	
end
