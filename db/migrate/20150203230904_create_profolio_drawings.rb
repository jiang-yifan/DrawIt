class CreateProfolioDrawings < ActiveRecord::Migration
  def change
    create_table :porfolio_drawings do |t|
      t.references :drawing, null: false, index: true
      t.references :porfolio, polymorphic: true, index: true, null: false
      t.timestamps null: false
    end
  end
end
