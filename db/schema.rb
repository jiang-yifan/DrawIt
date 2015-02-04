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

ActiveRecord::Schema.define(version: 20150203231805) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "drawing_tables", force: :cascade do |t|
  end

  create_table "drawings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "file_url",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "drawings", ["user_id"], name: "index_drawings_on_user_id", using: :btree

  create_table "main_porfolios", force: :cascade do |t|
    t.integer  "user_id",                               null: false
    t.string   "name",        default: "Main Porfolio", null: false
    t.text     "description"
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
  end

  add_index "main_porfolios", ["user_id"], name: "index_main_porfolios_on_user_id", using: :btree

  create_table "porfolio_drawings", force: :cascade do |t|
    t.integer  "drawing_id",    null: false
    t.integer  "porfolio_id",   null: false
    t.string   "porfolio_type", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "porfolio_drawings", ["drawing_id"], name: "index_porfolio_drawings_on_drawing_id", using: :btree
  add_index "porfolio_drawings", ["porfolio_type", "porfolio_id"], name: "index_porfolio_drawings_on_porfolio_type_and_porfolio_id", using: :btree

  create_table "porfolios", force: :cascade do |t|
    t.integer  "user_id",        null: false
    t.string   "name",           null: false
    t.text     "description"
    t.string   "profolio_image"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "porfolios", ["user_id"], name: "index_porfolios_on_user_id", using: :btree

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

  create_table "user_tables", force: :cascade do |t|
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
