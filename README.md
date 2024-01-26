# nida-tz
## Note
- This is not an official [NIDA](https//nida.go.tz) API and this package is under development
- This package is for members with api url

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
- Use 'getNin' function to pass your nida value
- getNin uses asynchronous function add await for better result
- Be sure you saved your api link as API_URL to .env file

---