class RenameIdTable < ActiveRecord::Migration[7.0]
  def change
    rename_column :tables, :token_id, :table_id 
  end
end
