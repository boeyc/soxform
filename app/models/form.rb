
class Form < ActiveRecord::Base
  attr_accessible :actions, :brand, :budget, :comments, :end_at, :kpi, :lar, :mechanism, :par, :name, :rationale, :sox_number, :start_at, :status,
  :targeted_stores, :tobacco_class, :province, :printable_sox_form, :program_types_attributes, :program_tasks_attributes

  

  has_event_calendar

	BO_CLASS = ["Cigarettes", "Fine Cut", "SNUS", "Other"]
	BO_PR = ["BC","AB","MB","SK","ON","QC","NB","NS","NFLD","PEI"]

	has_many :program_types
	has_many :province_forms
	has_many :provinces, through: :province_forms
	has_attached_file :printable_sox_form
	has_many :par_results
	accepts_nested_attributes_for :par_results
	accepts_nested_attributes_for :program_types
end
