class CreateUnicorns < ActiveRecord::Migration[5.0]
  def change
    create_table :unicorns do |t|

      t.timestamps
    end
  end
end
