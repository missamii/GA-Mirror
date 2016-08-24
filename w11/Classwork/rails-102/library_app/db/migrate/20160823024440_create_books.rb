class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :year_pub
      t.float :retail_price
      t.references :author
      t.timestamps
    end
  end
end
