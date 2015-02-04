class CreateMainProfolios < ActiveRecord::Migration
  def change
    create_table :main_porfolios do |t|
      t.references :user, index: true, null: false
      t.string :name, null: false
      t.text :description
      t.timestamps null: false
    end
  end
end
