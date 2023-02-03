```js 
const sign = require('./sign/function.js');

const hash = "AE87C717236320099C9910648832B4B75A1A35C1A505C34248809DCA0C66DCC5"; //data to sign

const privateKey = "A88C4CC79B5E63687DAEB2E58C3A7F9CE13D81F731C37AF30F21E426475EF70E"; //must be an ed25519 based private key

let signature = sign.signBlock(hash, privateKey);  //returns the HEX signature

console.log(signature);
```
