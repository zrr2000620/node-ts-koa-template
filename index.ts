import Koa from 'koa'
import middlewares from './middlewares'
import setting from './setting'
import { debug } from './utils/logger'

const app = new Koa()

const port = setting.port || 8080

const LOG_TAG = 'index_tag'

app.listen(port, () => {
  debug(LOG_TAG, '服务器启动于 http://localhost:' + port)
})

debug(LOG_TAG, '开始加载中间件...')

middlewares.forEach((middleware) => {
  app.use(middleware)
})

debug(LOG_TAG, '中间件加载完毕')
