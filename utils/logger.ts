import moment from 'moment'
import path from 'path'
import { v1 as uuid } from 'uuid'
import setting from '../setting'
import { mkdirSync, promises } from 'fs'

const outDir = path.join(__dirname, '../', setting.logDir || './log')

mkdirSync(outDir, { recursive: true })

export type Level = 'INFO' | 'DEBUG' | 'WARN' | 'ERROR'

export interface Log {
  level: Level
  message: string
  date: string
  id: string
  tag: string
  toString(): string
}

function writeFile(log: Log) {
  const filePath = path.join(outDir, moment().format('YYYY-M-D') + '.log')
  promises.appendFile(filePath, log + '\n')
}

function toString(this: Log): string {
  return (
    this.date +
    ' ' +
    this.level +
    ' ' +
    '[' +
    this.tag +
    ']' +
    ': ' +
    this.message
  )
}

export function log(level: Level, tag: string, msg: any) {
  const log = {} as Log
  log.id = uuid()
  log.tag = tag
  log.level = level
  log.date = moment().format('YYYY年M月D日 k:mm:ss')
  if (msg instanceof Error) {
    log.message = '\n' + msg.stack || ''
  } else {
    log.message = JSON.stringify(msg)
  }
  log.toString = toString

  console.log(log.toString())
  writeFile(log)
}

export function debug(msg: any): void

export function debug(tag: string, msg: any): void

export function debug(tag?: string, msg?: any) {
  if (arguments.length === 1) {
    log('DEBUG', 'DEBUG_DEFAULT', tag!)
  } else {
    log('DEBUG', tag!, msg!)
  }
}

export function info(msg: any): void

export function info(tag: string, msg: any): void

export function info(tag?: string, msg?: any) {
  if (arguments.length === 1) {
    log('INFO', 'INFO_DEFAULT', tag!)
  } else {
    log('INFO', tag!, msg!)
  }
}

export function warn(msg: any): void

export function warn(tag: string, msg: any): void

export function warn(tag?: string, msg?: any) {
  if (arguments.length === 1) {
    log('WARN', 'WARN_DEFAULT', tag!)
  } else {
    log('WARN', tag!, msg!)
  }
}

export function error(msg: any): void

export function error(tag: string, msg: any): void

export function error(tag?: string, msg?: any) {
  if (arguments.length === 1) {
    log('ERROR', 'ERROR_DEFAULT', tag!)
  } else {
    log('ERROR', tag!, msg!)
  }
}
