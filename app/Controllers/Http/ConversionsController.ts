import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Conversion from 'App/Models/Conversion'
import ConversionValidator from 'App/Validators/ConversionValidator'
import { DateTime } from 'luxon'
import Database from '@ioc:Adonis/Lucid/Database'

// fromUnit --> Unidade de começo, ex: mudando km por milhas
// toUnit --> Unidade para qual queira converter o valor desejado (no caso de km, para milhas)
// value --> é o valor que vc converte da unidade de origem de destino
export default class ConversionsController {
  public async show({ response }: HttpContextContract) {
    const unidade = await Database.query().from('conversions').distinct('from_unit', 'to_unit')
    const removerArray = unidade.shift()

    return response.json(removerArray)
  }

  public async store({ response }: HttpContextContract) {
    const unidade = await Conversion.create({
      from_unit: 'km',
      to_unit: 'miles',
      value: 32,
    })

    const miles = 1.609
    const result = unidade.value / miles
    // const { value } = await request.validate(ConversionValidator)
    // const miles = 1.609
    // const form = value / miles
    // return response.status(200).json({ 'Resultado de Km para milhas:': form })
    return response.json({ 'Km para milhas': result })
  }
}
