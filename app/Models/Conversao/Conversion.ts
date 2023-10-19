import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Conversion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public from_unit: string

  @column()
  public to_unit: string

  @column()
  public value: number
}
