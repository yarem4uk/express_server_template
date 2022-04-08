import 'dotenv/config'

import express from 'express'
import jt from 'jsonwebtoken'

const router = new express.Router()

const users = [
  { name: 'user', password: 'user' },
  { name: 'mama', password: 'mama' },
]

const autenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) {
    res.sendStatus(401)
    return
  }
  next()
}

router.post('/login', (req, res) => {
  const { user, password } = req.body
  const currentUser = users.find((el) => el.name === user)
  if (!currentUser) {
    res.sendStatus(401)
    return
  }
  if (currentUser.password !== password) {
    res.sendStatus(403)
    return
  }
  const token = jt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ token })
})

router.get('/data', autenticateToken, (req, res) => {
  console.log('You did it! :)')
  res.json({ data: 'You did it! :)' })
})

export default router
