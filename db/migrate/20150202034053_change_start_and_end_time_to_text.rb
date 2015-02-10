class ChangeStartAndEndTimeToText < ActiveRecord::Migration
  def change
  	change_column :itineraries, :start_date, :text
  	change_column :itineraries, :end_date, :text
  end
end
