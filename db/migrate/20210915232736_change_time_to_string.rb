class ChangeTimeToString < ActiveRecord::Migration[6.1]
  def change
    remove_column :appointments, :time, :time
    add_column :appointments, :time, :string
  end
end
