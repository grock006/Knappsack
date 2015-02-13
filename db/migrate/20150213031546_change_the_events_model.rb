class ChangeTheEventsModel < ActiveRecord::Migration
  def change
  	rename_column :events, :name, :title
  	rename_column :events, :date, :start
  	add_column :events, :allDay, :boolean , :default => false
  	add_column :events, :end, :datetime
  	change_column :events, :start, :datetime
  end
end
