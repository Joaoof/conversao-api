import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Conversion from 'App/Models/Conversao/Conversion'

export default class extends BaseSeeder {
  public async run() {
    await Conversion.createMany([
      {
        fromUnit: 'Km',
        toUnit: 'miles',
        value: 10,
      },
    ])
  }
}
