require 'rails_helper'

RSpec.describe Event, :type => :model do

  it "responds to title" do
    expect(Event.new).to respond_to(:title)
  end

  it "requires title" do
    expect(Event.new(start: "2015-02-14")).to be_invalid
  end

  it "requires start" do
    expect(Event.new(title: "Bowling")).to be_invalid
  end

  it "should have a default value of false for allDay" do
	 event = Event.create(title: "Bowling", start: "2015-02-14", allDay: nil)
	 expect(event.allDay).to eq(false)
   end

end
