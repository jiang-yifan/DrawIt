class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.string :token, null: false
      t.references :user, index: true

      t.timestamps null: false
    end
    add_index :sessions, :token, unique: true
  end
end
