# nida-tz
## Note
- This is not an official [NIDA](https//nida.go.tz) Library

Developed by [oxo]

### installation
```bash
npm install nida-tz
```

For better result you need `axios and dotenv` dependencies installed

### usage
```bash
const nidatz = require('nida-tz')

const userNin = 'XXXXXXXXXXXXXXXXXXXX';

// use asynchronous function main controller
const main = async() => {
    const fetcher = async(nin) => {
        return await nidatz.getNin(nin);
    }
    
    const result = await fetcher(userNin);
    console.log(result);
}
```

## Note
- THIS IS NOT AN OFFICIAL NIDA PACKAGE
- Save your API link as NIDA_TZ on your .env file
- Put nin in string for better result