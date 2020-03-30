class RemoveStartFromPlayers < ActiveRecord::Migration[6.0]
  def change

    remove_column :players, :start, :time
  end
end
