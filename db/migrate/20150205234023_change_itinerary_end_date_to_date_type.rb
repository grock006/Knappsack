class ChangeItineraryEndDateToDateType < ActiveRecord::Migration
  def change
  	 	change_column :itineraries, :end_date, 'date USING CAST(end_date AS date)'
  end
end
