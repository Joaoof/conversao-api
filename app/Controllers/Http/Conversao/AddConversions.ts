import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Conversion from 'App/Validators/Conversao/Conversion'

export default class AddConversionsController {
  public async store({ request, response }: HttpContextContract) {
    const { fromUnit, toUnit, value } = await request.validate(Conversion)

    const inserirDb = {
      fromUnit: fromUnit,
      toUnit: toUnit,
      value: value,
    }
    await Database.table('conversions').insert(inserirDb)
    return response.status(200).json({ message: 'Unidade adicionada' })
  }
}
