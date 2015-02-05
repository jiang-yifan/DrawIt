class CreateUserfriends < ActiveRecord::Migration
  def change
    create_table :userfriends do |t|

      t.timestamps null: false
    end
  end
end
