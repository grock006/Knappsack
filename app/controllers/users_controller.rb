class UsersController < ApplicationController

	def new
		redirect_to events_path if current_user
		@user = User.new
	end

	def create
		@user = User.new(user_params)

		if @user.save
			session[:user_id] = @user.id.to_s
			redirect_to intineraries_path
		else
			redirect_to :new
		end
	end

	def user_params
		params.require(:user).permit(:first_name, :last_name, :email, :age, :gender, :password, :password_confirmation)
	end

end