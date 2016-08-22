class UnicornsController < ApplicationController

  def index
    render json: {'Unicorns controller': 'INDEX route'}
  end

  def show
    render json: {'Unicorns controller': 'SHOW route'}
  end

  def create
    render json: {'Unicorns controller': 'CREATE route'}
  end

  def update
    render json: {'Unicorns controller': 'UPDATE route'}
  end

  def destroy
    render json: {'Unicorns controller': 'DESTROY route'}
  end
  
end
