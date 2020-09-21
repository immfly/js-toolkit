/**
 * @file Generates an .env file with the specified data.
 *
 * @example
 *  KEY=VALUE
*/

const Shell = require('../shell')
const FileWriter = require('../fileWriter')

const generate = async ({ file, ...data }) => {
  const keys = Object.keys(data)

  let content = ''
  keys.forEach((key) => {
    const value = data[key]
    if (!value) return

    content += `${key.toUpperCase()}=${data[key]}\n`
  })

  await FileWriter.write(file, content)
}

const prepare = ({ file }) => Shell.execute(`rm -rf ${file}`)

const build = async (data) => {
  await prepare(data)
  await generate(data)
}

module.exports = { build }
