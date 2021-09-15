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



doctors = []

  5.times do
  doc = Doctor.create(last_name: Faker::Name.last_name)
  doctors.push(doc)
end


5.times do |i|
  patient = Patient.create(name: Faker::Name.name)
  5.times do |i|
    Appointment.create(
      time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short), 
      doctor_id: doctors[i].id, patient_id: patient.id)
  end
end

puts "SKILLZZ SIZE: #{Doctor.all.length}"
puts "USER SIZE: #{Patient.all.length}"
puts "GRADE SIZE: #{Appointment.all.length}"

# grab patients doctor
puts "FIRST USER SKILLs: #{Patient.first.doctors}"

# grab patients firts doctor grades
puts "FIRST USER Appointments: #{Patient.first.appointments}"