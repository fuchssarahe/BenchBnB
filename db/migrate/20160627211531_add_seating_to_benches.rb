class AddSeatingToBenches < ActiveRecord::Migration
  def change

    add_column :benches, :num_of_seats, :integer
  end
end
