import 'dotenv/config'

import app from './app'


app().listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`)
})
