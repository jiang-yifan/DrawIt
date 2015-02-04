class ChangeNaming < ActiveRecord::Migration
  def change
    rename_column :porfolios, :profolio_image, :porfolio_image_url
    add_column :main_porfolios, :porfolio_image_url, :string
  end
end
