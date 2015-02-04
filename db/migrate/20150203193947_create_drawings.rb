class CreateDrawings < ActiveRecord::Migration
  def change
    create_table :drawings do |t|
      t.references :user, index: true, null: false
      t.string :file_url, null: false
      t.timestamps null: false
    end
  end
end
