class AddBelongsToEvent < ActiveRecord::Migration
  def change
  	add_belongs_to(:events, :itinerary, index:true)
  end
end
