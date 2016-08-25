class UnicornsController < ApplicationController
  # Unicorn = the unicorns table in the db

  def index
    #get all unicorns
    # render json: {'unicorns': 'INDEX route. This is where we will see all the unicorns listed.'}
    unicorns = Unicorn.all
    render json: unicorns
  end

  def show
    # get single unicorns
    # render json: {'unicorns:' 'SHOW route. This is where we will see alll info for a single unicorn.'}
    #render json: {'Unicorns controller': 'SHOW route'}
    #render json: {'You are viewing data for': params}
    unicorn = Unicorn.where(name: params[:names])
    render json: unicorn
  end

  def create
    # make new unicorns
    # render json {'unicorns': params}
    render json: {'unicorns': params}
    new_unicorns = Unicorns.new(name: params[:name], tailcolor: params[:tailcolor])

    if new_unicorns.save
      render json: new_unicorns
    else
      render json: {'error': new_unicorns.errors}
    end
  end

  def update
    # update a unicorn
    render json: {'unicorns - UPDATE route.': params}
    found_unicorn = Unicorn.where(name: params[:name]) #returns array that matches
    updated = found_unicorn.update(name: params[:newName], tailcolor: params[:newTailcolor])
    if updated
      render json: updated
    else
      render json: {'errors': updated.errors}
    end
  end

  def destroy
    #destroy a unicorns
    render json: {'unicorns': params}
    deleted = Unicorn.delete_all(name: params[:name])
  end
end
