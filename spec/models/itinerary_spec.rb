require 'rails_helper'

RSpec.describe Itinerary, :type => :model do

  it "responds to name" do
    expect(Itinerary.new).to respond_to(:name)
  end

  it "requires name" do
    expect(Itinerary.new(start_date: "2015-02-14", end_date: "2015-02-17", description: "Hello")).to be_invalid
  end

   it "requires start_date" do
    expect(Itinerary.new(name: "Spring Break", end_date: "2015-02-17", description: "Hello")).to be_invalid
  end

  it "requires end_date" do
    expect(Itinerary.new(name: "Spring Break", start_date: "2015-02-17", description: "Hello")).to be_invalid
  end

   it "requires description" do
    expect(Itinerary.new(name: "Spring Break", start_date: "2015-02-17", end_date: "2015-02-17")).to be_invalid
  end

  it "requires uniqueness of name" do
    itinerary1 = Itinerary.create(name: "Spring Break", start_date: "2015-02-17", end_date: "2015-02-17", description: "Hello")
    itinerary2 = Itinerary.new(name: "Spring Break", start_date: "2015-02-17", end_date: "2015-02-17", description: "Hello World")
    expect(itinerary2).to be_invalid
  end


end