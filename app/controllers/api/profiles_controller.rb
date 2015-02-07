class Api::ProfilesController < ApplicationController
  def show
    @profile = current_user.profile
  end
end
