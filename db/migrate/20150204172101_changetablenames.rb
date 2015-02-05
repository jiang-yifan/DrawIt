class Changetablenames < ActiveRecord::Migration
  def change
    rename_table :porfolios, :portfolios
    rename_table :main_porfolios, :main_portfolios
    rename_table :porfolio_drawings, :portfolio_drawings
    rename_column :portfolio_drawings, :porfolio_id, :portfolio_id
    rename_column :portfolio_drawings, :porfolio_type, :portfolio_type
    rename_column :portfolios, :porfolio_image_url, :portfolio_image_url
    rename_column :main_portfolios, :porfolio_image_url, :portfolio_image_url
    change_column :main_portfolios, :name, :string, default: "Main Portfolio"
  end
end
