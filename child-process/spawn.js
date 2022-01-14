'use strict'

const { spawnSync } = require('child_process')
const { spawn } = require('child_process')

const result = spawnSync(
    process.execPath,
    ['-e', `console.err('subprocess stdio output')`]
)
console.log('1st obj', result.stdout.toString())

const sp = spawn(
    process.execPath,
    ['-e', `console.log('subprocess stdio output')`]
)

console.log('2nd object', sp.stdout.toString())

sp.stdout.pipe(process.stdout)

sp.on('close', (status) => {
    console.log(`exit code status was ${status}`)
})



console.log(result)