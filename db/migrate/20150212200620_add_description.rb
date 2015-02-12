class AddDescription < ActiveRecord::Migration
  def change
    add_column :drawings, :description, :text
  end
end
