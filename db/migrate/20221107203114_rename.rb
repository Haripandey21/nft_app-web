class Rename < ActiveRecord::Migration[7.0]
  def change
    rename_column :tables, :token_ID , :token_id
    rename_column :listtokens, :token_ID, :token_id
  end
end

