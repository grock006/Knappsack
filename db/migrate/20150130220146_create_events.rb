class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :date
      t.time :start_time
      t.time :end_time
      t.string :category
      t.string :description
      t.string :rating
      t.string :main_url
      t.string :location

      t.timestamps null: false
    end
  end
end
