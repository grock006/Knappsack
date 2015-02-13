class ChangeItineraryStartAndEndDateToDateType < ActiveRecord::Migration
  def change
  	change_column :itineraries, :start_date, 'date USING CAST(start_date AS date)'
  end
end
