# nida-tz
Karibu katika npm hii ya kupata taarifa za namba za nida kutoka tanzania

## Installation
```bash
npm install nida-tz
```

## Matumizi
- Hii inatumia asynchronous functions katika kutuma ombi yaani `async - wait`
- Function inabidi iwe na maombi mawili ili kurudisha taarifa za nida.
- Sehemu ya kwanza inakuwa na namba ya nida na sehemu ya pili inakuwa na `http method` ambazo ni `POST au GET`
- Mfano `async jinaLaFunction(nida,method)`

```bash
# Syntax
async functionName(parameters);

# sample
const nidatz = require('nida-tz');
const method = "post"; #or "get
const nida = "12345123451234512345"; # put nin in string

async function mainFunction() => {
    const userData = await nidatz.nidaData(nida, method);
}
```

## Mfano katika Express
Hivi ndio namna ya kutumia katika express
```bash
# express usage
const express = require('express');
const app = expess();
const nidatz = require('nida-tz');

app.get('/route', async (req, res)=>{
    const nida = '12345123451234512345';
    const method = 'post'; # unaweza kutumia POST au GET tu
    const userData = await nidatz.nidaData(nida, method);
    console.log(userData);
})

app.listen(portNumber, ()=>{})
```

## Maana ya baadhi ya jumbe za kimakosa
- ### Method si sahihi
- Jumbe hii inamaana kuwa umetumia http methods ambazo hazikutambulika katika mbali na `POST or GET`

- ### Mtumiaji hakupatikana
- Jumbe hii inamaana kuwa namba ya nida iliyotumika haikupata data yoyote kutoka katika maktaba

- ### Imeshindwa kupata data za {nida} kwa kutumia {method}
- Jumbe hii inamaanisha kuwa kuna makosa ya kimchakato. Unaweza ukatuma tena ombi au ukabadili method


# ANGALIZO
- Namba ya nida inatakiwa iwe katika mfumo wa string
- Ili uweze kutumia package hii inakulazimu uwe na link maalumu ya kuweza kupata data za nida
- Link hiyo ya kupata data haikuwekwa
- Link ya kuvutia data inabidi iwe saved kama NIDA_TZ katika mafaili kama .env

---
- # Maktaba hii haikutengenezwa kutoka katika maktaba za nida tanzania