export interface AppSetting {
  port?: number
  db: DatabaseConfig
  logDir?: string
}

export interface DatabaseConfig {
  url: string
}

const setting: AppSetting = {
  port: 8080,
  db: {
    url: '',
  },
  logDir: './log',
}

export default setting
