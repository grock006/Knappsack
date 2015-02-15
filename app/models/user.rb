class User < ActiveRecord::Base
	validates_presence_of :first_name, :last_name, :email, :password, :password_confirmation
	validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
	validates :email, uniqueness: {case_sensitive: false}

	has_many :itineraries
	has_secure_password
end
