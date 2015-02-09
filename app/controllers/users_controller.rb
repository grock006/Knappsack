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
			flash.now[:danger] = "Something is wrong"
			render :index
		end
	end

	# def create
 #    @user = User.new(user_params)

 #    respond_to do |format|
 #      if @user.save
 #        format.html { redirect_to @user, notice: 'user was successfully created.' }
 #        format.json { render action: 'show', status: :created, location: @user }
 #        # added:
 #        format.js   { render action: 'show', status: :created, location: @user }
 #      else
 #        format.html { render action: 'new' }
 #        format.json { render json: @user.errors, status: :unprocessable_entity }
 #        # added:
 #        format.js   { render json: @user.errors, status: :unprocessable_entity }
 #      end
 #    end
 #  end

	def user_params
		params.require(:user).permit(:first_name, :last_name, :email, :age, :gender, :password, :password_confirmation)
	end

end