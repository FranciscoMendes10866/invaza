import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import httpProxy from 'express-http-proxy'
import RateLimit from 'express-rate-limit'
import RedisStore from 'rate-limit-redis'

import proxy from '@providers/proxy.loader'
import RedisClient from '@providers/redis.provider'

const app = express()
const limiter = new RateLimit({
  store: new RedisStore({
    client: RedisClient,
    expiry: 15 * 60 // 15 min (seconds)
  }),
  max: 100,
  windowMS: 15 * 60 * 1000, // 15 min (milliseconds)
  delayMs: 0
})

app.use(cors())
app.use(helmet())
app.use(limiter)
app.use(morgan('combined'))

proxy.forEach(({ name, url }) => {
  app.use(`/${name}`, httpProxy(url, { timeout: 5000 }))
})

app.listen(9999, () => {
  console.log('🤘 The API Gateway is working and is already waiting for HTTP requests. 👌')
})
