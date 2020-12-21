export interface AppSetting {
  port?: number
  db?: DatabaseConfig
  logDir?: string
}

export interface DatabaseConfig {
  protocol: string
  host: string
  port: number
  username: string
  password: string
  databaseName?: string
}

const setting: AppSetting = {
  port: 8080,
}

export default setting
