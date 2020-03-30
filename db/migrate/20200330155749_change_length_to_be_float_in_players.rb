class ChangeLengthToBeFloatInPlayers < ActiveRecord::Migration[6.0]
  def change
    change_column :players, :length, :float
  end
end
