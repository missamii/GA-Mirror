class UnicornsController < ApplicationController
  # 'Unicorn' = the unicorns table in db

  def index
    # render json: {'Unicorns controller': 'INDEX route'}

    unicorns = Unicorn.all
    render json: unicorns
  end

  def show
    # render json: {'Unicorns controller': params}
    # p unicorn # prints the unicorn to terminal
    # unicorn.brush_hair() # call a method from the model

    unicorn = Unicorn.where(name: params[:name])
    render json: unicorn
  end

  def create
    # render json: {'Unicorns controller CREATE ROUTE': params}

    # create a new unicorn based on the params passed:
    new_unicorn = Unicorn.new(name: params[:name], tailcolor: params[:tailcolor])

    # create a unicorn only allowing the whitelisted ones to come through
    # new_unicorn = Unicorn.new(unicorn_params)

    # if save was successful, send it back as JSON so we can see it in browser
    if new_unicorn.save
      render json: new_unicorn
    else # otherwise render an error because we messed up.
      render json: {'error': new_unicorn.errors}
    end

  end

  def update
    # render json: {'Unicorns controller': 'UPDATE route'}

    # first, find the unicorn by name in the DB
    found_unicorn = Unicorn.where(name: params[:name])

    # Update each param separately:
    # updated = found_unicorn.update(name: params[:name], tailcolor: params[:tailcolor])

    # Update params shortcut with pre-whitelisted param keys:
    updated = found_unicorn.update(unicorn_params)

    if updated
      render json: updated
    else
      render json: {'error': updated.errors}
    end
  end

  def destroy
    Unicorn.delete_all(name: params[:name])
    render json: {'Unicorns controller': 'UNICORN DESTROYED'}
  end


  private

    # whitelist params
    def unicorn_params
      # require a 'unicorn' key on the 'params' obj
      # that is permitted to have only two properties inside: name & tailcolor
      # These properties MUST be existing cols in your db.
      params.require(:unicorn).permit(:name, :tailcolor)
    end

    # Now, in Postman, select raw > JSON & you must input your data in this format:
    # {
    #   "unicorn": {
    #     "name": "Liza",
    #     "tailcolor": "Blue"
    #   }
    # }

end
