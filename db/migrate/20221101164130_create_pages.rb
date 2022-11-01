class CreatePages < ActiveRecord::Migration[7.0]
  def change
    create_table :pages do |t|

      t.integer :token_id
      t.text :token_url
      t.text :name
      t.text :description 
      t.timestamps
    end
  end
end
