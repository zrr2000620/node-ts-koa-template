import Koa from 'koa'
import setting from './setting'
import { debug } from './utils/logger'

const app = new Koa()

const port = setting.port || 8080

const LOG_TAG = 'index_tag'

app.listen(port, () => {
  debug(LOG_TAG, 'server running in http://localhost:' + port)
})
