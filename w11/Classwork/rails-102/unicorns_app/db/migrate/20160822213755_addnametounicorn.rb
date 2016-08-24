class Addnametounicorn < ActiveRecord::Migration[5.0]
  def change
    change_table :unicorns do |t|
      t.string :name
      t.string :tailcolor
    end
  end
end
