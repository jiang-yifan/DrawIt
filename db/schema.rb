# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150206011455) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "commentable_id",   null: false
    t.string   "commentable_type", null: false
    t.text     "body",             null: false
    t.integer  "user_id",          null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "comments", ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id", using: :btree

  create_table "drawing_tables", force: :cascade do |t|
  end

  create_table "drawings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "file_url",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "drawings", ["user_id"], name: "index_drawings_on_user_id", using: :btree

  create_table "hearts", force: :cascade do |t|
    t.integer  "heartable_id",   null: false
    t.string   "heartable_type", null: false
    t.integer  "user_id",        null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "hearts", ["heartable_type", "heartable_id"], name: "index_hearts_on_heartable_type_and_heartable_id", using: :btree
  add_index "hearts", ["user_id"], name: "index_hearts_on_user_id", using: :btree

  create_table "main_portfolios", force: :cascade do |t|
    t.integer  "user_id",                                        null: false
    t.string   "name",                default: "Main Portfolio", null: false
    t.text     "description"
    t.datetime "created_at",                                     null: false
    t.datetime "updated_at",                                     null: false
    t.string   "portfolio_image_url"
  end

  add_index "main_portfolios", ["user_id"], name: "index_main_portfolios_on_user_id", using: :btree

  create_table "portfolio_drawings", force: :cascade do |t|
    t.integer  "drawing_id",     null: false
    t.integer  "portfolio_id",   null: false
    t.string   "portfolio_type", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "portfolio_drawings", ["drawing_id"], name: "index_portfolio_drawings_on_drawing_id", using: :btree
  add_index "portfolio_drawings", ["portfolio_type", "portfolio_id"], name: "index_portfolio_drawings_on_portfolio_type_and_portfolio_id", using: :btree

  create_table "portfolios", force: :cascade do |t|
    t.integer  "user_id",             null: false
    t.string   "name",                null: false
    t.text     "description"
    t.string   "portfolio_image_url"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  add_index "portfolios", ["user_id"], name: "index_portfolios_on_user_id", using: :btree

  create_table "profiles", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "avatar_url"
    t.string   "cover_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "profiles", ["user_id"], name: "index_profiles_on_user_id", using: :btree

  create_table "session_tables", force: :cascade do |t|
  end

  create_table "sessions", force: :cascade do |t|
    t.string   "token",      null: false
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "sessions", ["token"], name: "index_sessions_on_token", unique: true, using: :btree
  add_index "sessions", ["user_id"], name: "index_sessions_on_user_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id",        null: false
    t.integer  "taggable_id"
    t.string   "taggable_type"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree
  add_index "taggings", ["taggable_type", "taggable_id"], name: "index_taggings_on_taggable_type_and_taggable_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "tag_name",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_favorite_drawings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "drawing_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "user_favorite_drawings", ["drawing_id"], name: "index_user_favorite_drawings_on_drawing_id", using: :btree
  add_index "user_favorite_drawings", ["user_id"], name: "index_user_favorite_drawings_on_user_id", using: :btree

  create_table "user_friends", force: :cascade do |t|
    t.integer  "friend_id",                      null: false
    t.integer  "user_id",                        null: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.string   "status",     default: "pending", null: false
  end

  add_index "user_friends", ["friend_id"], name: "index_user_friends_on_friend_id", using: :btree
  add_index "user_friends", ["user_id"], name: "index_user_friends_on_user_id", using: :btree

  create_table "user_tables", force: :cascade do |t|
  end

  create_table "userfriends", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["password_digest"], name: "index_users_on_password_digest", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
