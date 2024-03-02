import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Holiday extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare days: string

  @column()
  declare name_holidays: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
