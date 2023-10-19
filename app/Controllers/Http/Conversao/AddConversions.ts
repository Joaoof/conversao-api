import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Conversion from 'App/Validators/Conversao/Conversion'

export default class AddConversionsController {
  public async store({ request, response }: HttpContextContract) {
    const { from_unit, to_unit, value } = await request.validate(Conversion)
    await Database.table('conversions').insert(from_unit, to_unit, value)
    return response.status(200).json({ message: 'Unidade adicionada'})
  }
}
