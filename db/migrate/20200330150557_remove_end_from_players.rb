class RemoveEndFromPlayers < ActiveRecord::Migration[6.0]
  def change

    remove_column :players, :end, :time
  end
end
