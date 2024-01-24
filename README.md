# nida-tz

Get nida data using user nida number

## Note
- This is not an official [NIDA] API and this package is under development
- This package is for members with api url

Current version is `2.0.5 Stable`

Developed by [oxoroot] and written by *Matayo Ayo.*

---
---

## Usage
- Get the package via npm
```bash
npm install nida-tz
```
- Get the data from the provided user nida number using getNin()
```bash
const nidatz = require('nidat-z');

await nidatz.getNin(nin)
.then(data => console.log(data))
.catch(err => console.error(err.message)); 
```

Return

```bash
{
    "NIN": "NUMBER",
    "FIRSTNAME": "STRING",
    "MIDDLENAME": "STRING",
    "SURNAME": "STRING",
    "SEX": "STRING",
    "DATEOFBIRTH": "YYYY-MM-DD",
    "NATIONALITY": "STRING"
}
```

---
---

## Errors

### Not found : 
The number provided does not exist
### Solution : 
- Check the number provided and send request again
### Error : 
- Failed to run the program 
### Solution : 
- Add API_URL variable to .env file

---
---

## Note
- THIS IS NOT AN OFFICIAL NIDA PACKAGE
- Use 'getNin' function to pass your nida value
- getNin uses asynchronous function add await for better result
- Be sure you saved your api link as API_URL to .env file

---
---

## Changelogs
### Version 2.0.1
- Solved failed to run the program
### Version 2.0.0
- Fixed minor bugs