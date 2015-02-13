class SessionsController < ApplicationController

	def new
	end

	def create		
		user = User.where(email: params[:user][:email]).first

		if user && user.authenticate(params[:user][:password])
			session[:user_id] = user.id 
			redirect_to '/index'
		else
			render :new
		end
	end

	def destroy
		session[:user_id] = nil
		redirect_to users_path
	end

end