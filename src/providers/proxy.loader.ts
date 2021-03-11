import { resolve } from 'path'
import { readFileSync } from 'fs'
import { load } from 'js-yaml'

let infra

try {
  const configFile = resolve(__dirname, 'proxy.config.yml')
  const readConfig = readFileSync(configFile, { encoding: 'utf8' })
  infra = load(readConfig, { json: true })
} catch (err) {
  throw new Error(err)
}

export default infra.services
