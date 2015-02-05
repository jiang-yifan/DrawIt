class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :commentable, polymorphic: true, index: true, null: false
      t.text :body, null: false
      t.references :user, null: false
      t.timestamps null: false
    end
  end
end
