# nida-tz
Fetch Tanzania nida data

### installation
```bash
npm install nida-tz
```

For better result you need `axios and dotenv` dependencies installed

### usage
This library work with two addition dependency that are ` axios ` and ` dotenv ` modules installed. To install run both ` npm i axios dotenv `
- It uses asynchronous function to make a request ` async - await `
- Function takes two parameters that are nida number and http method ` post ` or ` get `
- functionName(nidaNumber, post)  or functionName(nidaNumber, get)

```bash
# Syntax
async functionName(parameters);

# sample
const nidatz = require('nida-tz');
const nin = "12345123451234512345";

async function mainFunction() => {
    const userData = await nidatz.nidaData(nin);
}
```

---

```bash
# express usage
const express = require('express')
const app = expess()
const nidatz = require('nida-tz')

app.get('/route', async (req, res)=>{
    const nida = '12345123451234512345'
    const userData = await nidatz.nidaData(nida)
    res.send(userData)
})

app.listen(portNumber, ()=>{})
```

---

[Documentation](https://matayo-ayo.github.io/nida-tz)