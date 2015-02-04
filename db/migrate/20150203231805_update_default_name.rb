class UpdateDefaultName < ActiveRecord::Migration
  def change
    change_column :main_porfolios, :name, :string, default: "Main Porfolio"
  end
end
