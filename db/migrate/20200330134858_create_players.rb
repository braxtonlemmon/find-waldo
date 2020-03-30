class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.time :start
      t.time :end
      t.integer :length

      t.timestamps
    end
  end
end
