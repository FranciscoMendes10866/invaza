import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import httpProxy from 'express-http-proxy'

import proxies from '@providers/proxy.loader'

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('combined'))

proxies.forEach(({ name, url }) => {
  app.use(`/${name}`, httpProxy(url, { timeout: 5000 }))
})

app.listen(9999, () => {
  console.log('🤘 The API Gateway is working and is already waiting for HTTP requests. 👌')
})
