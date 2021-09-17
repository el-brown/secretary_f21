# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



require 'faker'
Appointment.destroy_all
Doctor.destroy_all
Patient.destroy_all

times = ["9:00","10:00","11:00","12:00","1:00","2:00","3:00","4:00","9:30","10:30","11:30","12:30","1:30","2:30","3:30","4:30"]

doctors = []

  5.times do
  doc = Doctor.create(last_name: Faker::Name.last_name)
  doctors.push(doc)
end

5.times do |i|
  patient = Patient.create(name: Faker::Name.name)
  2.times do |i|
    Appointment.create(
      time: times.sample, 
      doctor_id: doctors[i].id, patient_id: patient.id)
  end
end

puts "Doc SIZE: #{Doctor.all.length}"
puts "Patient SIZE: #{Patient.all.length}"
puts "Appointments SIZE: #{Appointment.all.length}"
