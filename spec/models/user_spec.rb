require 'rails_helper'

RSpec.describe User, :type => :model do

  it "responds to name" do
    expect(User.new).to respond_to(:first_name)
  end

  it "requires first name" do
    expect(User.new(last_name: "Mulray", email: "Hollis@Hollis.com", password: "foo", password_confirmation: "foo")).to be_invalid
  end

   it "requires last name" do
    expect(User.new(first_name: "Hollis", email: "Hollis@Hollis.com", password: "foo", password_confirmation: "foo")).to be_invalid
  end

  it "requires email" do
    expect(User.new(first_name: "Hollis", last_name: "Mulray", password: "foo", password_confirmation: "foo")).to be_invalid
  end

  it "is invalid if email isn't formatted properly" do
        emails = ["HJJKK", "ab c", "ashs@com", "something@com.c"]
        emails.each do |email|
          user = User.new(first_name: "Hollis", last_name: "Mulray", password: "foo", password_confirmation: "foo", email: email)
          expect(user).to be_invalid
        end
    end

   it "requires password" do
    expect(User.new(first_name: "Hollis", last_name: "Mulray", email: "Hollis@Hollis.com", password_confirmation: "foo")).to be_invalid
  end

  it "requires password confirmation" do
    expect(User.new(first_name: "Hollis", last_name: "Mulray", email: "Hollis@Hollis.com", password: "foo")).to be_invalid
  end

  it "requires uniqueness of email" do
    User1 = User.create(first_name: "Hollis", last_name: "Mulray", email: "Hollis@Hollis.com", password: "foo", password_confirmation: "foo")
    User2 = User.new(first_name: "Hollis", last_name: "Mulray", email: "Hollis@Hollis.com", password: "foo", password_confirmation: "foo")
    expect(User2).to be_invalid
  end


end