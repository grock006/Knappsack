class AddBelongsToItinerary < ActiveRecord::Migration
  def change
  	add_belongs_to(:itineraries, :user, index:true)
  end
end
