# JSON-EXTRACTOR

This library make easy the way to extract property into a json object

## Installation

Usage the npm package manager [npm](https://www.npmjs.com/) to install json-extractor

```bash
npm install @sir_koty/json-extractor
```

## Usage

```javascript
import { jsonExtract } from '@sir_koty/json-extractor';

const myData = { person: { 
                            firstname: 'J@mes', 
                            lastname: 'Bond'
                 },
                 country: {
                            name: 'Ivory Coast',
                            code: 225
                  }
                };
const propertiesToExtract = ['person/firstname+lastname@fullname', 'country/name'];
const newJson = jsonExtract(myData, propertiesToExtract);

// newJson value {fullname: 'J@mes Bond', country__name: 'Ivory Coast' }
console.log('newJson value ', newJson);

```
## Demo
[Sample on Stackblitz](https://stackblitz.com/edit/json-extractor-sample?file=index.js)

## License
[MIT](https://choosealicense.com/licenses/mit/)
