'use strict'

const { execSync } = require('child_process')

const cmd = process.platform === 'win32' ? 'dir' : 'ls'

console.log(execSync(cmd).toString())