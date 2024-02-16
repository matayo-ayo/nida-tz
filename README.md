# nida-tz
Fetch Tanzania nida data

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
    const fetcher = async(nin, request) => {
        return await nidatz.getNin(nin);
    }
    const result = await fetcher(userNin);
    console.log(result);
}
```

## Note
- Save your link NIDA_TZ on your .env file
- Put nin in string for better result