class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient

  def self.all_plus
    appointments = Appointment.all
    appointments.map do | ap |
      { id: ap.id, time: ap.time, doctor: ap.doctor, patient: ap.patient }
    end
  end
  
end
