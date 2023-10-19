import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Conversion from 'App/Models/Conversao/Conversion'
import ConversionValidator from 'App/Validators/Conversao/Conversion'
import { DateTime } from 'luxon'
import Database from '@ioc:Adonis/Lucid/Database'

// fromUnit --> Unidade de começo, ex: mudando km por milhas
// toUnit --> Unidade para qual queira converter o valor desejado (no caso de km, para milhas)
// value --> é o valor que vc converte da unidade de origem de destino
export default class ConversionsController {
  public async show({ request, response }: HttpContextContract) {
    const conversion = await Conversion.query().from('conversions').distinct('from_unit', 'to_unit')
    const conversionJSON = conversion.map((post) => post.serialize())

    return response.json(conversionJSON)
  }

  public async store({ request, response }: HttpContextContract) {
    const conversao = await request.validate(ConversionValidator)
    const lbs = 2.2046
    const miles = 1.609
    if (!conversao) {
      response.json({ message: 'Digite sua unidade' })
    }
    const formula = {
      lbs: conversao.value * lbs,
      miles: conversao.value / miles,
    }

    return response.json(`${conversao.from_unit} para ${conversao.to_unit}: ${formula.miles} `)
  }
}
