class CreateHearts < ActiveRecord::Migration
  def change
    create_table :hearts do |t|
      t.references :heartable, polymorphic: true, index: true, null: false
      t.references :user, index: true, null: false
      t.timestamps null: false
    end
  end
end
