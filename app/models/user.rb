class User < ActiveRecord::Base
	has_many :itineraries
	has_secure_password
end
