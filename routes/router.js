import express from 'express'

const router = new express.Router()

router.get('/', (req, res, next) => {
  res.json({ first: 'hello' })
})

export default router
