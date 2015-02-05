class RenameTableFriend < ActiveRecord::Migration
  def change
    rename_table :friends, :user_friends
  end
end
