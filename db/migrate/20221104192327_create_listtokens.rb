class CreateListtokens < ActiveRecord::Migration[7.0]
  def change
    create_table :listtokens do |t|
      t.integer :token_ID
      t.float :token_price 
      t.boolean :isListed
      t.timestamps
    end
  end
end



