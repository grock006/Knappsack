class SessionsController < ApplicationController

	def new
	end

	def create		
		user = User.where(email: params[:user][:email]).first

		if user && user.authenticate(params[:user][:password])
			session[:user_id] = user.id 
			redirect_to root_path
		else
			# flash[:danger] = "Username or password incorrect."
			redirect_to root_path
		end
	end

	def destroy
		session[:user_id] = nil
		redirect_to root_path
	end

end