class CreateTables < ActiveRecord::Migration[7.0]
  def change
    create_table :tables do |t|
        t.integer :token_ID
        t.string :token_URI
        t.string :image_URI
        t.string :name
        t.string :description
        t.timestamps
    end
  end
end




