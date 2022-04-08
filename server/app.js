import Express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import routes from '../routes/router'

export default () => {
  const app = new Express()

  app.use(morgan('dev'))
  app.disable('x-powered-by')

  // parse application/x-www-form-urlencoded
  // app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())

  app.use('/api/v1', routes)

  return app
}
