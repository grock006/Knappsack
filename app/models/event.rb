class Event < ActiveRecord::Base
	after_initialize :default_values
	validates_presence_of :title, :start

    def default_values
    	if self.allDay.nil?
      		self.allDay = false
  		end
    end

	belongs_to :itinerary
end
