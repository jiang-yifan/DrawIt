class CreateProfolios < ActiveRecord::Migration
  def change
    create_table :porfolios do |t|
      t.references :user, index: true, null: false
      t.string :name, null: false
      t.text :description
      t.string :profolio_image
      t.timestamps null: false
    end
  end
end
