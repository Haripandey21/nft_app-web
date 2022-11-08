class RenameTokenId < ActiveRecord::Migration[7.0]
  def change
    rename_column :listtokens, :token_id, :table_id
  end
end
