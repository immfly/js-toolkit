const fs = require('fs')

const write = (file, data) => (
  new Promise((resolve, reject) => {
    fs.appendFile(file, data, error => {
      if (error) return reject(error)
      resolve()
    })
  })
)

const writeEmptyLine = file => write(file, '\n')

module.exports = {
  write,
  writeEmptyLine
}
