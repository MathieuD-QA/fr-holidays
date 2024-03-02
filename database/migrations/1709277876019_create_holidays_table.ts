import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'holidays'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('days')
      table.string('name_holidays')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
