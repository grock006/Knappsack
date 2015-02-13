class UsersController < ApplicationController

	def index		
	end


	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)

		if @user.save
			session[:user_id] = @user.id.to_s
			redirect_to root_path
		else
			flash.now[:danger] = "Something is wrong"
			redirect_to root_path
		end
	end

	private

	def user_params
		params.require(:user).permit(:first_name, :last_name, :email, :age, :gender, :password, :password_confirmation)
	end

end