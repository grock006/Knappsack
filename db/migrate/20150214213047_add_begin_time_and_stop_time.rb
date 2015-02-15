class AddBeginTimeAndStopTime < ActiveRecord::Migration
  def change
  	add_column :events, :begin_time, :time
  	add_column :events, :stop_time, :time  
  end
end
