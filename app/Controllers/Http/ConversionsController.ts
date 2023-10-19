import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Conversion from 'App/Models/Conversion'
import ConversionValidator from 'App/Validators/ConversionValidator'
import { DateTime } from 'luxon'
import Database from '@ioc:Adonis/Lucid/Database'

// fromUnit --> Unidade de começo, ex: mudando km por milhas
// toUnit --> Unidade para qual queira converter o valor desejado (no caso de km, para milhas)
// value --> é o valor que vc converte da unidade de origem de destino
export default class ConversionsController {
  public async show({ request, response }: HttpContextContract) {
    const searchDatabase = await Database.query()
      .from('conversions')
      .distinct('from_unit', 'to_unit')
    const unidades = searchDatabase.shift() // tirar o array, já que searchDatabase é um array

    return response.json(unidades)
  }

  public async store({ request, response }: HttpContextContract) {
    const conversao = await request.validate(ConversionValidator)
    const miles = 1.609
    const result = conversao.value / miles

    return response.json({ 'Km para milhas': result })
  }
}
