class SessionsController < ApplicationController

	def new
	end

	def create		
		user = User.where(email: params[:user][:email]).first

		if user && user.authenticate(params[:user][:password])
			session[:user_id] = user.id 
			# redirect_to itineraries_path
		else
			render :signup
		end
	end

	def destroy
		session[:user_id] = nil
		# redirect_to itineraries_path
	end

end