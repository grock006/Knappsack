class SessionsController < ApplicationController

	def new
	end

	def create		
		user = User.where(email: params[:user][:email]).first

		if user && user.authenticate(params[:user][:password])
			session[:user_id] = user.id 
			redirect_to '/index'
		else
			redirect_to root_path
		end
	end

	def destroy
		session[:user_id] = nil
		redirect_to root_path
	end

end