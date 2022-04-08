import 'dotenv/config'

import Express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'


import routes from '../routes/router'

export default () => {
  const app = new Express()

  app.use(morgan('dev'))
  app.disable('x-powered-by')

  app.use(cors({ 
    origin: process.env.HOST
  }))

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())

  app.use('/api/v1', routes)

  return app
}
