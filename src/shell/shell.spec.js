const Shell = require('./shell')

const { check } = require('child_process')
jest.mock('child_process')

test('Should return a string', () => {
  Shell.execute('ls -la')
})