import Express from 'express'
import morgan from 'morgan'

import routes from '../routes/router'

export default () => {
  const app = new Express()

  app.use(morgan('dev'))
  app.disable('x-powered-by')

  app.use(routes)

  return app
}
