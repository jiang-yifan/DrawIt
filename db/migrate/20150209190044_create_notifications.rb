class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.string :status, default: "unviewed", null: false
      t.string :content, null: false
      t.references :initiator, null: false, index: true
      t.references :notifiable, polymorphic: true, null: false, index: true
      t.references :user, index: true, null: false
      t.timestamps null: false
    end
  end
end
