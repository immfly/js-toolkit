![npm](https://img.shields.io/npm/v/@immfly/js-tools-kit.svg) [![Build Status](https://travis-ci.org/immfly/js-tools-kit.svg?branch=master)](https://travis-ci.org/immfly/js-tools-kit) [![MIT license](http://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)

# js-tools-kit
<img src='https://lh3.googleusercontent.com/proxy/ePay-1VRq51XVxc-8gEttC4p8AZ22Vn-Dq4YpwnnoDba6PboVWyIYGMLOZJ1f6GohNJSnkZx5BNradpSem_LPcTH9x9z7u29vwEx1M216i1chviNeA' />

This package exports modules used through `js` immfly projects.

## Installation
```
npm install --save @immfly/js-tools-kit
```

## Tools

### Shell
Allows to run bash commands.
```js
const { Shell } = require('@immfly/js-tools-kit' )

...
await Shell.execute('echo "Hellow"')
```

### FileWriter
Allows to write files given the output file and its content.
```js
const { FileWriter } = require('@immfly/js-tools-kit' )

...
await FileWriter.write('file.txt', '::content::'))
```

### EnvFiler
Allows generate `.env` files given the output file and the data to generate.
```js
const { EnvFiler } = require('@immfly/js-tools-kit' )

...
await EnvFiler.build({
  file: 'file.txt',
  data1: '::data1::',
  data2: '::data2::'
})
```

The result of this example whould be a file named `file.txt` with this content:
```bash
DATA1=::data1
DATA2=::data2

```


## Contributing
Contributions welcome; Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author
Albert Pérez Farrés 

## License
 - **MIT** : http://opensource.org/licenses/MIT
