const nacl = require("./nacl.js");
const blakejs = require("blakejs");


function hexToByteArray(hex) {
  let bytes = [];
  for (let c = 0; c < hex.length; c += 2){
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }
  return new Uint8Array(bytes);
}

function byteArrayToHex(bytes) {
  let hex = [];
  for (let i = 0; i < bytes.length; i++) {
    let current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
    hex.push((current >>> 4).toString(16));
    hex.push((current & 0xF).toString(16));
  }
  return hex.join("").toUpperCase();
}


function signBlock(hash, secretKey)  {
  const blockHashBytes = hexToByteArray(hash);
  const secretKeyBytes = hexToByteArray(secretKey);
  const signatureBytes = nacl.sign.detached(blockHashBytes, secretKeyBytes);
  return byteArrayToHex(signatureBytes);
}

module.exports = {
  hexToByteArray,
  byteArrayToHex,
  signBlock
};
