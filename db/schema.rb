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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131017025330) do

  create_table "forms", :force => true do |t|
    t.string   "sox_number"
    t.string   "program_name"
    t.date     "start_date"
    t.date     "end_date"
    t.string   "tobacco_class"
    t.string   "brand"
    t.string   "targeted_stores"
    t.decimal  "budget"
    t.string   "mechanism"
    t.string   "rationale"
    t.string   "kpi"
    t.string   "actions"
    t.string   "par"
    t.string   "lar"
    t.string   "status"
    t.string   "comments"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

end