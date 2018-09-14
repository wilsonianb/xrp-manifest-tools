const axios = require('axios')
const {base58toHex, hextoBase64} = require('./utils.js')
const codec = require('ripple-binary-codec')

const validator = process.env['VALIDATOR']

axios.get('https://data.ripple.com/v2/network/validators/' +
  validator + '/manifests?descending=true&limit=1')
.then(res => {
  if (res.data.manifests && res.data.manifests.length) {
    const manifest = res.data.manifests[0]
    console.log(hextoBase64(codec.encode({
      MasterSignature: manifest.master_signature,
      PublicKey: base58toHex(manifest.master_public_key),
      Sequence: manifest.sequence,
      Signature: manifest.signature,
      SigningPubKey: base58toHex(manifest.ephemeral_public_key)
    })))
  }
}).catch(err => {
  console.log(err)
})
