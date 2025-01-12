{
    "name": "pokedex_backend",
    "version": "1.0.0",
    "lockfileVersion": 3,
    "requires": true,
    "packages": {
      "": {
        "name": "pokedex_backend",
        "version": "1.0.0",
        "license": "ISC",
        "dependencies": {
          "cors": "^2.8.5",
          "dotenv": "^16.4.7",
          "express": "^4.21.2",
          "mongoose": "^8.9.4"
        },
        "devDependencies": {
          "nodemon": "^3.1.9"
        }
      },
      "node_modules/@mongodb-js/saslprep": {
        "version": "1.1.9",
        "resolved": "https://registry.npmjs.org/@mongodb-js/saslprep/-/saslprep-1.1.9.tgz",
        "integrity": "sha512-tVkljjeEaAhCqTzajSdgbQ6gE6f3oneVwa3iXR6csiEwXXOFsiC6Uh9iAjAhXPtqa/XMDHWjjeNH/77m/Yq2dw==",
        "license": "MIT",
        "dependencies": {
          "sparse-bitfield": "^3.0.3"
        }
      },
      "node_modules/@types/webidl-conversions": {
        "version": "7.0.3",
        "resolved": "https://registry.npmjs.org/@types/webidl-conversions/-/webidl-conversions-7.0.3.tgz",
        "integrity": "sha512-CiJJvcRtIgzadHCYXw7dqEnMNRjhGZlYK05Mj9OyktqV8uVT8fD2BFOB7S1uwBE3Kj2Z+4UyPmFw/Ixgw/LAlA==",
        "license": "MIT"
      },
      "node_modules/@types/whatwg-url": {
        "version": "11.0.5",
        "resolved": "https://registry.npmjs.org/@types/whatwg-url/-/whatwg-url-11.0.5.tgz",
        "integrity": "sha512-coYR071JRaHa+xoEvvYqvnIHaVqaYrLPbsufM9BF63HkwI5Lgmy2QR8Q5K/lYDYo5AK82wOvSOS0UsLTpTG7uQ==",
        "license": "MIT",
        "dependencies": {
          "@types/webidl-conversions": "*"
        }
      },
      "node_modules/accepts": {
        "version": "1.3.8",
        "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
        "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
        "license": "MIT",
        "dependencies": {
          "mime-types": "~2.1.34",
          "negotiator": "0.6.3"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/anymatch": {
        "version": "3.1.3",
        "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
        "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
        "dev": true,
        "license": "ISC",
        "dependencies": {
          "normalize-path": "^3.0.0",
          "picomatch": "^2.0.4"
        },
        "engines": {
          "node": ">= 8"
        }
      },
      "node_modules/array-flatten": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
        "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==",
        "license": "MIT"
      },
      "node_modules/balanced-match": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
        "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
        "dev": true,
        "license": "MIT"
      },
      "node_modules/binary-extensions": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
        "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
        "dev": true,
        "license": "MIT",
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/body-parser": {
        "version": "1.20.3",
        "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.3.tgz",
        "integrity": "sha512-7rAxByjUMqQ3/bHJy7D6OGXvx/MMc4IqBn/X0fcM1QUcAItpZrBEYhWGem+tzXH90c+G01ypMcYJBO9Y30203g==",
        "license": "MIT",
        "dependencies": {
          "bytes": "3.1.2",
          "content-type": "~1.0.5",
          "debug": "2.6.9",
          "depd": "2.0.0",
          "destroy": "1.2.0",
          "http-errors": "2.0.0",
          "iconv-lite": "0.4.24",
          "on-finished": "2.4.1",
          "qs": "6.13.0",
          "raw-body": "2.5.2",
          "type-is": "~1.6.18",
          "unpipe": "1.0.0"
        },
        "engines": {
          "node": ">= 0.8",
          "npm": "1.2.8000 || >= 1.4.16"
        }
      },
      "node_modules/brace-expansion": {
        "version": "1.1.11",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "dev": true,
        "license": "MIT",
        "dependencies": {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1"
        }
      },
      "node_modules/braces": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
        "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
        "dev": true,
        "license": "MIT",
        "dependencies": {
          "fill-range": "^7.1.1"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/bson": {
        "version": "6.10.1",
        "resolved": "https://registry.npmjs.org/bson/-/bson-6.10.1.tgz",
        "integrity": "sha512-P92xmHDQjSKPLHqFxefqMxASNq/aWJMEZugpCjf+AF/pgcUpMMQCg7t7+ewko0/u8AapvF3luf/FoehddEK+sA==",
        "license": "Apache-2.0",
        "engines": {
          "node": ">=16.20.1"
        }
      },
      "node_modules/bytes": {
        "version": "3.1.2",
        "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
        "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/call-bind-apply-helpers": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.1.tgz",
        "integrity": "sha512-BhYE+WDaywFg2TBWYNXAE+8B1ATnThNBqXHP5nQu0jWJdVvY2hvkpyB3qOmtmDePiS5/BDQ8wASEWGMWRG148g==",
        "license": "MIT",
        "dependencies": {
          "es-errors": "^1.3.0",
          "function-bind": "^1.1.2"
        },
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/call-bound": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.3.tgz",
        "integrity": "sha512-YTd+6wGlNlPxSuri7Y6X8tY2dmm12UMH66RpKMhiX6rsk5wXXnYgbUcOt8kiS31/AjfoTOvCsE+w8nZQLQnzHA==",
        "license": "MIT",
        "dependencies": {
          "call-bind-apply-helpers": "^1.0.1",
          "get-intrinsic": "^1.2.6"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/chokidar": {
        "version": "3.6.0",
        "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
        "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
        "dev": true,
        "license": "MIT",
        "dependencies": {
          "anymatch": "~3.1.2",
          "braces": "~3.0.2",
          "glob-parent": "~5.1.2",
          "is-binary-path": "~2.1.0",
          "is-glob": "~4.0.1",
          "normalize-path": "~3.0.0",
          "readdirp": "~3.6.0"
        },
        "engines": {
          "node": ">= 8.10.0"
        },
        "funding": {
          "url": "https://paulmillr.com/funding/"
        },
        "optionalDependencies": {
          "fsevents": "~2.3.2"
        }
      },
      "node_modules/concat-map": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
        "dev": true,
        "license": "MIT"
      },
      "node_modules/content-disposition": {
        "version": "0.5.4",
        "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
        "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
        "license": "MIT",
        "dependencies": {
          "safe-buffer": "5.2.1"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/content-type": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
        "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/cookie": {
        "version": "0.7.1",
        "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.1.tgz",
        "integrity": "sha512-6DnInpx7SJ2AK3+CTUE/ZM0vWTUboZCegxhC2xiIydHR9jNuTAASBrfEpHhiGOZw/nX51bHt6YQl8jsGo4y/0w==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/cookie-signature": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
        "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ==",
        "license": "MIT"
      },
      "node_modules/cors": {
        "version": "2.8.5",
        "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
        "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
        "license": "MIT",
        "dependencies": {
          "object-assign": "^4",
          "vary": "^1"
        },
        "engines": {
          "node": ">= 0.10"
        }
      },
      "node_modules/debug": {
        "version": "2.6.9",
        "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
        "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
        "license": "MIT",
        "dependencies": {
          "ms": "2.0.0"
        }
      },
      "node_modules/depd": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
        "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/destroy": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
        "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.8",
          "npm": "1.2.8000 || >= 1.4.16"
        }
      },
      "node_modules/dotenv": {
        "version": "16.4.7",
        "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.4.7.tgz",
        "integrity": "sha512-47qPchRCykZC03FhkYAhrvwU4xDBFIj1QPqaarj6mdM/hgUzfPHcpkHJOn3mJAufFeeAxAzeGsr5X0M4k6fLZQ==",
        "license": "BSD-2-Clause",
        "engines": {
          "node": ">=12"
        },
        "funding": {
          "url": "https://dotenvx.com"
        }
      },
      "node_modules/dunder-proto": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
        "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
        "license": "MIT",
        "dependencies": {
          "call-bind-apply-helpers": "^1.0.1",
          "es-errors": "^1.3.0",
          "gopd": "^1.2.0"
        },
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/ee-first": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
        "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
        "license": "MIT"
      },
      "node_modules/encodeurl": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
        "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/es-define-property": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
        "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/es-errors": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
        "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/es-object-atoms": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.0.0.tgz",
        "integrity": "sha512-MZ4iQ6JwHOBQjahnjwaC1ZtIBH+2ohjamzAO3oaHcXYup7qxjF2fixyH+Q71voWHeOkI2q/TnJao/KfXYIZWbw==",
        "license": "MIT",
        "dependencies": {
          "es-errors": "^1.3.0"
        },
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/escape-html": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
        "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
        "license": "MIT"
      },
      "node_modules/etag": {
        "version": "1.8.1",
        "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
        "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/express": {
        "version": "4.21.2",
        "resolved": "https://registry.npmjs.org/express/-/express-4.21.2.tgz",
        "integrity": "sha512-28HqgMZAmih1Czt9ny7qr6ek2qddF4FclbMzwhCREB6OFfH+rXAnuNCwo1/wFvrtbgsQDb4kSbX9de9lFbrXnA==",
        "license": "MIT",
        "dependencies": {
          "accepts": "~1.3.8",
          "array-flatten": "1.1.1",
          "body-parser": "1.20.3",
          "content-disposition": "0.5.4",
          "content-type": "~1.0.4",
          "cookie": "0.7.1",
          "cookie-signature": "1.0.6",
          "debug": "2.6.9",
          "depd": "2.0.0",
          "encodeurl": "~2.0.0",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "finalhandler": "1.3.1",
          "fresh": "0.5.2",
          "http-errors": "2.0.0",
          "merge-descriptors": "1.0.3",
          "methods": "~1.1.2",
          "on-finished": "2.4.1",
          "parseurl": "~1.3.3",
          "path-to-regexp": "0.1.12",
          "proxy-addr": "~2.0.7",
          "qs": "6.13.0",
          "range-parser": "~1.2.1",
          "safe-buffer": "5.2.1",
          "send": "0.19.0",
          "serve-static": "1.16.2",
          "setprototypeof": "1.2.0",
          "statuses": "2.0.1",
          "type-is": "~1.6.18",
          "utils-merge": "1.0.1",
          "vary": "~1.1.2"
        },
        "engines": {
          "node": ">= 0.10.0"
        },
        "funding": {
          "type": "opencollective",
          "url": "https://opencollective.com/express"
        }
      },
      "node_modules/fill-range": {
        "version": "7.1.1",
        "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
        "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
        "dev": true,
        "license": "MIT",
        "dependencies": {
          "to-regex-range": "^5.0.1"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/finalhandler": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.3.1.tgz",
        "integrity": "sha512-6BN9trH7bp3qvnrRyzsBz+g3lZxTNZTbVO2EV1CS0WIcDbawYVdYvGflME/9QP0h0pYlCDBCTjYa9nZzMDpyxQ==",
        "license": "MIT",
        "dependencies": {
          "debug": "2.6.9",
          "encodeurl": "~2.0.0",
          "escape-html": "~1.0.3",
          "on-finished": "2.4.1",
          "parseurl": "~1.3.3",
          "statuses": "2.0.1",
          "unpipe": "~1.0.0"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/forwarded": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
        "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/fresh": {
        "version": "0.5.2",
        "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
        "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/fsevents": {
        "version": "2.3.3",
        "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
        "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
        "dev": true,
        "hasInstallScript": true,
        "license": "MIT",
        "optional": true,
        "os": [
          "darwin"
        ],
        "engines": {
          "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
        }
      },
      "node_modules/function-bind": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
        "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
        "license": "MIT",
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/get-intrinsic": {
        "version": "1.2.7",
        "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.7.tgz",
        "integrity": "sha512-VW6Pxhsrk0KAOqs3WEd0klDiF/+V7gQOpAvY1jVU/LHmaD/kQO4523aiJuikX/QAKYiW6x8Jh+RJej1almdtCA==",
        "license": "MIT",
        "dependencies": {
          "call-bind-apply-helpers": "^1.0.1",
          "es-define-property": "^1.0.1",
          "es-errors": "^1.3.0",
          "es-object-atoms": "^1.0.0",
          "function-bind": "^1.1.2",
          "get-proto": "^1.0.0",
          "gopd": "^1.2.0",
          "has-symbols": "^1.1.0",
          "hasown": "^2.0.2",
          "math-intrinsics": "^1.1.0"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/get-proto": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
        "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
        "license": "MIT",
        "dependencies": {
          "dunder-proto": "^1.0.1",
          "es-object-atoms": "^1.0.0"
        },
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/glob-parent": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
        "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
        "dev": true,
        "license": "ISC",
        "dependencies": {
          "is-glob": "^4.0.1"
        },
        "engines": {
          "node": ">= 6"
        }
      },
      "node_modules/gopd": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
        "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/has-flag": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
        "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
        "dev": true,
        "license": "MIT",
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/has-symbols": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
        "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/hasown": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
        "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
        "license": "MIT",
        "dependencies": {
          "function-bind": "^1.1.2"
        },
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/http-errors": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
        "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
        "license": "MIT",
        "dependencies": {
          "depd": "2.0.0",
          "inherits": "2.0.4",
          "setprototypeof": "1.2.0",
          "statuses": "2.0.1",
          "toidentifier": "1.0.1"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/iconv-lite": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
        "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
        "license": "MIT",
        "dependencies": {
          "safer-buffer": ">= 2.1.2 < 3"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/ignore-by-default": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
        "integrity": "sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==",
        "dev": true,
        "license": "ISC"
      },
      "node_modules/inherits": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
        "license": "ISC"
      },
      "node_modules/ipaddr.js": {
        "version": "1.9.1",
        "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
        "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.10"
        }
      },
      "node_modules/is-binary-path": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
        "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
        "dev": true,
        "license": "MIT",
        "dependencies": {
          "binary-extensions": "^2.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/is-extglob": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
        "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
        "dev": true,
        "license": "MIT",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/is-glob": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
        "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
        "dev": true,
        "license": "MIT",
        "dependencies": {
          "is-extglob": "^2.1.1"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/is-number": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
        "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
        "dev": true,
        "license": "MIT",
        "engines": {
          "node": ">=0.12.0"
        }
      },
      "node_modules/kareem": {
        "version": "2.6.3",
        "resolved": "https://registry.npmjs.org/kareem/-/kareem-2.6.3.tgz",
        "integrity": "sha512-C3iHfuGUXK2u8/ipq9LfjFfXFxAZMQJJq7vLS45r3D9Y2xQ/m4S8zaR4zMLFWh9AsNPXmcFfUDhTEO8UIC/V6Q==",
        "license": "Apache-2.0",
        "engines": {
          "node": ">=12.0.0"
        }
      },
      "node_modules/math-intrinsics": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
        "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/media-typer": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
        "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/memory-pager": {
        "version": "1.5.0",
        "resolved": "https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz",
        "integrity": "sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg==",
        "license": "MIT"
      },
      "node_modules/merge-descriptors": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.3.tgz",
        "integrity": "sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==",
        "license": "MIT",
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/methods": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
        "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/mime": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
        "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
        "license": "MIT",
        "bin": {
          "mime": "cli.js"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/mime-db": {
        "version": "1.52.0",
        "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
        "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/mime-types": {
        "version": "2.1.35",
        "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
        "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
        "license": "MIT",
        "dependencies": {
          "mime-db": "1.52.0"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/minimatch": {
        "version": "3.1.2",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
        "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
        "dev": true,
        "license": "ISC",
        "dependencies": {
          "brace-expansion": "^1.1.7"
        },
        "engines": {
          "node": "*"
        }
      },
      "node_modules/mongodb": {
        "version": "6.12.0",
        "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-6.12.0.tgz",
        "integrity": "sha512-RM7AHlvYfS7jv7+BXund/kR64DryVI+cHbVAy9P61fnb1RcWZqOW1/Wj2YhqMCx+MuYhqTRGv7AwHBzmsCKBfA==",
        "license": "Apache-2.0",
        "dependencies": {
          "@mongodb-js/saslprep": "^1.1.9",
          "bson": "^6.10.1",
          "mongodb-connection-string-url": "^3.0.0"
        },
        "engines": {
          "node": ">=16.20.1"
        },
        "peerDependencies": {
          "@aws-sdk/credential-providers": "^3.188.0",
          "@mongodb-js/zstd": "^1.1.0 || ^2.0.0",
          "gcp-metadata": "^5.2.0",
          "kerberos": "^2.0.1",
          "mongodb-client-encryption": ">=6.0.0 <7",
          "snappy": "^7.2.2",
          "socks": "^2.7.1"
        },
        "peerDependenciesMeta": {
          "@aws-sdk/credential-providers": {
            "optional": true
          },
          "@mongodb-js/zstd": {
            "optional": true
          },
          "gcp-metadata": {
            "optional": true
          },
          "kerberos": {
            "optional": true
          },
          "mongodb-client-encryption": {
            "optional": true
          },
          "snappy": {
            "optional": true
          },
          "socks": {
            "optional": true
          }
        }
      },
      "node_modules/mongodb-connection-string-url": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/mongodb-connection-string-url/-/mongodb-connection-string-url-3.0.1.tgz",
        "integrity": "sha512-XqMGwRX0Lgn05TDB4PyG2h2kKO/FfWJyCzYQbIhXUxz7ETt0I/FqHjUeqj37irJ+Dl1ZtU82uYyj14u2XsZKfg==",
        "license": "Apache-2.0",
        "dependencies": {
          "@types/whatwg-url": "^11.0.2",
          "whatwg-url": "^13.0.0"
        }
      },
      "node_modules/mongoose": {
        "version": "8.9.4",
        "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-8.9.4.tgz",
        "integrity": "sha512-DndoI01aV/q40P9DiYDXsYjhj8vZjmmuFwcC3Tro5wFznoE1z6Fe2JgMnbLR6ghglym5ziYizSfAJykp+UPZWg==",
        "license": "MIT",
        "dependencies": {
          "bson": "^6.10.1",
          "kareem": "2.6.3",
          "mongodb": "~6.12.0",
          "mpath": "0.9.0",
          "mquery": "5.0.0",
          "ms": "2.1.3",
          "sift": "17.1.3"
        },
        "engines": {
          "node": ">=16.20.1"
        },
        "funding": {
          "type": "opencollective",
          "url": "https://opencollective.com/mongoose"
        }
      },
      "node_modules/mongoose/node_modules/ms": {
        "version": "2.1.3",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
        "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
        "license": "MIT"
      },
      "node_modules/mpath": {
        "version": "0.9.0",
        "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.9.0.tgz",
        "integrity": "sha512-ikJRQTk8hw5DEoFVxHG1Gn9T/xcjtdnOKIU1JTmGjZZlg9LST2mBLmcX3/ICIbgJydT2GOc15RnNy5mHmzfSew==",
        "license": "MIT",
        "engines": {
          "node": ">=4.0.0"
        }
      },
      "node_modules/mquery": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/mquery/-/mquery-5.0.0.tgz",
        "integrity": "sha512-iQMncpmEK8R8ncT8HJGsGc9Dsp8xcgYMVSbs5jgnm1lFHTZqMJTUWTDx1LBO8+mK3tPNZWFLBghQEIOULSTHZg==",
        "license": "MIT",
        "dependencies": {
          "debug": "4.x"
        },
        "engines": {
          "node": ">=14.0.0"
        }
      },
      "node_modules/mquery/node_modules/debug": {
        "version": "4.4.0",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
        "integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
        "license": "MIT",
        "dependencies": {
          "ms": "^2.1.3"
        },
        "engines": {
          "node": ">=6.0"
        },
        "peerDependenciesMeta": {
          "supports-color": {
            "optional": true
          }
        }
      },
      "node_modules/mquery/node_modules/ms": {
        "version": "2.1.3",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
        "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
        "license": "MIT"
      },
      "node_modules/ms": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
        "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
        "license": "MIT"
      },
      "node_modules/negotiator": {
        "version": "0.6.3",
        "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
        "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/nodemon": {
        "version": "3.1.9",
        "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-3.1.9.tgz",
        "integrity": "sha512-hdr1oIb2p6ZSxu3PB2JWWYS7ZQ0qvaZsc3hK8DR8f02kRzc8rjYmxAIvdz+aYC+8F2IjNaB7HMcSDg8nQpJxyg==",
        "dev": true,
        "license": "MIT",
        "dependencies": {
          "chokidar": "^3.5.2",
          "debug": "^4",
          "ignore-by-default": "^1.0.1",
          "minimatch": "^3.1.2",
          "pstree.remy": "^1.1.8",
          "semver": "^7.5.3",
          "simple-update-notifier": "^2.0.0",
          "supports-color": "^5.5.0",
          "touch": "^3.1.0",
          "undefsafe": "^2.0.5"
        },
        "bin": {
          "nodemon": "bin/nodemon.js"
        },
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "type": "opencollective",
          "url": "https://opencollective.com/nodemon"
        }
      },
      "node_modules/nodemon/node_modules/debug": {
        "version": "4.4.0",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
        "integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
        "dev": true,
        "license": "MIT",
        "dependencies": {
          "ms": "^2.1.3"
        },
        "engines": {
          "node": ">=6.0"
        },
        "peerDependenciesMeta": {
          "supports-color": {
            "optional": true
          }
        }
      },
      "node_modules/nodemon/node_modules/ms": {
        "version": "2.1.3",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
        "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
        "dev": true,
        "license": "MIT"
      },
      "node_modules/normalize-path": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
        "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
        "dev": true,
        "license": "MIT",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/object-assign": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
        "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
        "license": "MIT",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/object-inspect": {
        "version": "1.13.3",
        "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.3.tgz",
        "integrity": "sha512-kDCGIbxkDSXE3euJZZXzc6to7fCrKHNI/hSRQnRuQ+BWjFNzZwiFF8fj/6o2t2G9/jTj8PSIYTfCLelLZEeRpA==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/on-finished": {
        "version": "2.4.1",
        "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
        "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
        "license": "MIT",
        "dependencies": {
          "ee-first": "1.1.1"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/parseurl": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
        "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/path-to-regexp": {
        "version": "0.1.12",
        "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.12.tgz",
        "integrity": "sha512-RA1GjUVMnvYFxuqovrEqZoxxW5NUZqbwKtYz/Tt7nXerk0LbLblQmrsgdeOxV5SFHf0UDggjS/bSeOZwt1pmEQ==",
        "license": "MIT"
      },
      "node_modules/picomatch": {
        "version": "2.3.1",
        "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
        "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
        "dev": true,
        "license": "MIT",
        "engines": {
          "node": ">=8.6"
        },
        "funding": {
          "url": "https://github.com/sponsors/jonschlinkert"
        }
      },
      "node_modules/proxy-addr": {
        "version": "2.0.7",
        "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
        "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
        "license": "MIT",
        "dependencies": {
          "forwarded": "0.2.0",
          "ipaddr.js": "1.9.1"
        },
        "engines": {
          "node": ">= 0.10"
        }
      },
      "node_modules/pstree.remy": {
        "version": "1.1.8",
        "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
        "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==",
        "dev": true,
        "license": "MIT"
      },
      "node_modules/punycode": {
        "version": "2.3.1",
        "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
        "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
        "license": "MIT",
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/qs": {
        "version": "6.13.0",
        "resolved": "https://registry.npmjs.org/qs/-/qs-6.13.0.tgz",
        "integrity": "sha512-+38qI9SOr8tfZ4QmJNplMUxqjbe7LKvvZgWdExBOmd+egZTtjLB67Gu0HRX3u/XOq7UU2Nx6nsjvS16Z9uwfpg==",
        "license": "BSD-3-Clause",
        "dependencies": {
          "side-channel": "^1.0.6"
        },
        "engines": {
          "node": ">=0.6"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/range-parser": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
        "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/raw-body": {
        "version": "2.5.2",
        "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.2.tgz",
        "integrity": "sha512-8zGqypfENjCIqGhgXToC8aB2r7YrBX+AQAfIPs/Mlk+BtPTztOvTS01NRW/3Eh60J+a48lt8qsCzirQ6loCVfA==",
        "license": "MIT",
        "dependencies": {
          "bytes": "3.1.2",
          "http-errors": "2.0.0",
          "iconv-lite": "0.4.24",
          "unpipe": "1.0.0"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/readdirp": {
        "version": "3.6.0",
        "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
        "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
        "dev": true,
        "license": "MIT",
        "dependencies": {
          "picomatch": "^2.2.1"
        },
        "engines": {
          "node": ">=8.10.0"
        }
      },
      "node_modules/safe-buffer": {
        "version": "5.2.1",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
        "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
        "funding": [
          {
            "type": "github",
            "url": "https://github.com/sponsors/feross"
          },
          {
            "type": "patreon",
            "url": "https://www.patreon.com/feross"
          },
          {
            "type": "consulting",
            "url": "https://feross.org/support"
          }
        ],
        "license": "MIT"
      },
      "node_modules/safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
        "license": "MIT"
      },
      "node_modules/semver": {
        "version": "7.6.3",
        "resolved": "https://registry.npmjs.org/semver/-/semver-7.6.3.tgz",
        "integrity": "sha512-oVekP1cKtI+CTDvHWYFUcMtsK/00wmAEfyqKfNdARm8u1wNVhSgaX7A8d4UuIlUI5e84iEwOhs7ZPYRmzU9U6A==",
        "dev": true,
        "license": "ISC",
        "bin": {
          "semver": "bin/semver.js"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/send": {
        "version": "0.19.0",
        "resolved": "https://registry.npmjs.org/send/-/send-0.19.0.tgz",
        "integrity": "sha512-dW41u5VfLXu8SJh5bwRmyYUbAoSB3c9uQh6L8h/KtsFREPWpbX1lrljJo186Jc4nmci/sGUZ9a0a0J2zgfq2hw==",
        "license": "MIT",
        "dependencies": {
          "debug": "2.6.9",
          "depd": "2.0.0",
          "destroy": "1.2.0",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "fresh": "0.5.2",
          "http-errors": "2.0.0",
          "mime": "1.6.0",
          "ms": "2.1.3",
          "on-finished": "2.4.1",
          "range-parser": "~1.2.1",
          "statuses": "2.0.1"
        },
        "engines": {
          "node": ">= 0.8.0"
        }
      },
      "node_modules/send/node_modules/encodeurl": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
        "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/send/node_modules/ms": {
        "version": "2.1.3",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
        "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
        "license": "MIT"
      },
      "node_modules/serve-static": {
        "version": "1.16.2",
        "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.16.2.tgz",
        "integrity": "sha512-VqpjJZKadQB/PEbEwvFdO43Ax5dFBZ2UECszz8bQ7pi7wt//PWe1P6MN7eCnjsatYtBT6EuiClbjSWP2WrIoTw==",
        "license": "MIT",
        "dependencies": {
          "encodeurl": "~2.0.0",
          "escape-html": "~1.0.3",
          "parseurl": "~1.3.3",
          "send": "0.19.0"
        },
        "engines": {
          "node": ">= 0.8.0"
        }
      },
      "node_modules/setprototypeof": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
        "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
        "license": "ISC"
      },
      "node_modules/side-channel": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
        "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
        "license": "MIT",
        "dependencies": {
          "es-errors": "^1.3.0",
          "object-inspect": "^1.13.3",
          "side-channel-list": "^1.0.0",
          "side-channel-map": "^1.0.1",
          "side-channel-weakmap": "^1.0.2"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/side-channel-list": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
        "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
        "license": "MIT",
        "dependencies": {
          "es-errors": "^1.3.0",
          "object-inspect": "^1.13.3"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/side-channel-map": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
        "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
        "license": "MIT",
        "dependencies": {
          "call-bound": "^1.0.2",
          "es-errors": "^1.3.0",
          "get-intrinsic": "^1.2.5",
          "object-inspect": "^1.13.3"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/side-channel-weakmap": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
        "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
        "license": "MIT",
        "dependencies": {
          "call-bound": "^1.0.2",
          "es-errors": "^1.3.0",
          "get-intrinsic": "^1.2.5",
          "object-inspect": "^1.13.3",
          "side-channel-map": "^1.0.1"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/sift": {
        "version": "17.1.3",
        "resolved": "https://registry.npmjs.org/sift/-/sift-17.1.3.tgz",
        "integrity": "sha512-Rtlj66/b0ICeFzYTuNvX/EF1igRbbnGSvEyT79McoZa/DeGhMyC5pWKOEsZKnpkqtSeovd5FL/bjHWC3CIIvCQ==",
        "license": "MIT"
      },
      "node_modules/simple-update-notifier": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-2.0.0.tgz",
        "integrity": "sha512-a2B9Y0KlNXl9u/vsW6sTIu9vGEpfKu2wRV6l1H3XEas/0gUIzGzBoP/IouTcUQbm9JWZLH3COxyn03TYlFax6w==",
        "dev": true,
        "license": "MIT",
        "dependencies": {
          "semver": "^7.5.3"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/sparse-bitfield": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz",
        "integrity": "sha512-kvzhi7vqKTfkh0PZU+2D2PIllw2ymqJKujUcyPMd9Y75Nv4nPbGJZXNhxsgdQab2BmlDct1YnfQCguEvHr7VsQ==",
        "license": "MIT",
        "dependencies": {
          "memory-pager": "^1.0.2"
        }
      },
      "node_modules/statuses": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
        "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/supports-color": {
        "version": "5.5.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
        "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
        "dev": true,
        "license": "MIT",
        "dependencies": {
          "has-flag": "^3.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/to-regex-range": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
        "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
        "dev": true,
        "license": "MIT",
        "dependencies": {
          "is-number": "^7.0.0"
        },
        "engines": {
          "node": ">=8.0"
        }
      },
      "node_modules/toidentifier": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
        "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
        "license": "MIT",
        "engines": {
          "node": ">=0.6"
        }
      },
      "node_modules/touch": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.1.tgz",
        "integrity": "sha512-r0eojU4bI8MnHr8c5bNo7lJDdI2qXlWWJk6a9EAFG7vbhTjElYhBVS3/miuE0uOuoLdb8Mc/rVfsmm6eo5o9GA==",
        "dev": true,
        "license": "ISC",
        "bin": {
          "nodetouch": "bin/nodetouch.js"
        }
      },
      "node_modules/tr46": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/tr46/-/tr46-4.1.1.tgz",
        "integrity": "sha512-2lv/66T7e5yNyhAAC4NaKe5nVavzuGJQVVtRYLyQ2OI8tsJ61PMLlelehb0wi2Hx6+hT/OJUWZcw8MjlSRnxvw==",
        "license": "MIT",
        "dependencies": {
          "punycode": "^2.3.0"
        },
        "engines": {
          "node": ">=14"
        }
      },
      "node_modules/type-is": {
        "version": "1.6.18",
        "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
        "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
        "license": "MIT",
        "dependencies": {
          "media-typer": "0.3.0",
          "mime-types": "~2.1.24"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/undefsafe": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz",
        "integrity": "sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==",
        "dev": true,
        "license": "MIT"
      },
      "node_modules/unpipe": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
        "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/utils-merge": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
        "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.4.0"
        }
      },
      "node_modules/vary": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
        "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
        "license": "MIT",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/webidl-conversions": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-7.0.0.tgz",
        "integrity": "sha512-VwddBukDzu71offAQR975unBIGqfKZpM+8ZX6ySk8nYhVoo5CYaZyzt3YBvYtRtO+aoGlqxPg/B87NGVZ/fu6g==",
        "license": "BSD-2-Clause",
        "engines": {
          "node": ">=12"
        }
      },
      "node_modules/whatwg-url": {
        "version": "13.0.0",
        "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-13.0.0.tgz",
        "integrity": "sha512-9WWbymnqj57+XEuqADHrCJ2eSXzn8WXIW/YSGaZtb2WKAInQ6CHfaUUcTyyver0p8BDg5StLQq8h1vtZuwmOig==",
        "license": "MIT",
        "dependencies": {
          "tr46": "^4.1.1",
          "webidl-conversions": "^7.0.0"
        },
        "engines": {
          "node": ">=16"
        }
      }
    }
  }
  