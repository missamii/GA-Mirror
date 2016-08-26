class WelcomeController < ApplicationController

  def index
    render json: {'Welcome controller': 'welcome to the unicorns API'}
  end

  def about_us
    render json: {'Welcome controller': 'ABOUT US route'}
  end

  def contact
    render json: {'Welcome controller': 'CONTACT us route'}
  end

  def liza
    render json: {'Welcome controller': 'LIZA route'}
  end

end
