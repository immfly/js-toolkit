const { exec } = require('child_process')

const execute = (cmd) => (
  new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(error)

      resolve(stdout || stderr)
    })
  })
)

module.exports = { execute }
