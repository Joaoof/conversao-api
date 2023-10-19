import Route from '@ioc:Adonis/Core/Route'
import './Conversion'
import './AddConversion'

Route.get('/', async () => {
  return { hello: 'world' }
})
