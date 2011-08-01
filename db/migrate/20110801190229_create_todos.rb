class CreateTodos < ActiveRecord::Migration
  def self.up
    create_table :todos do |t|
      t.string  :content, :null=>false
      t.integer :order
      t.boolean :done, :default=>false, :null=>false
      t.timestamps
    end
  end

  def self.down
    drop_table :todos
  end
end
