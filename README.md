# nida-tz
## Note
- This is not an official [NIDA](https//nida.go.tz) API

Developed by [oxo]

### installation
```bash
npm install nida-tz
```
### usage
```bash
const nidatz = require('nida-tz');

const fetcher = async() => {
    try{
        const fetch = await nidatz.getNin(ninToFind);
    } catch (err){
        console.error(err)
    }
}
 const data = fetcher(userNin)
```
## Note
- THIS IS NOT AN OFFICIAL NIDA PACKAGE