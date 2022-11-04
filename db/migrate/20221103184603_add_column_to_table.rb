class AddColumnToTable < ActiveRecord::Migration[7.0]
  def change

    add_column :tables, :Buy_Sell, :string
  end
end
