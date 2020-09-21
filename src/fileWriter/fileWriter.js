const fs = require('fs')

const write = (file, data) => (
  new Promise((resolve, reject) => {
    fs.appendFile(file, data, error => {
      if (error) return reject(error)
      resolve()
    })
  })
)

const replace = (file, keys, by) => (
  new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (error, data) => {
      if (error) return reject(error)

      keys.forEach((key) => {
        data = data.replace(key, by)
      })

      fs.writeFile(file, data, 'utf8', function (error) {
        if (error) return reject(error)

        resolve()
      })
    })
  })
)

const writeEmptyLine = file => write(file, '\n')

module.exports = {
  write,
  writeEmptyLine,
  replace
}
