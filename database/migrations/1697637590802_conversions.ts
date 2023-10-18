import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'conversions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('from_unit').notNullable()
      table.string('to_unit').notNullable()
      table.integer('value').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
