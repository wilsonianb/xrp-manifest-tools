const {base64toHex, hextoBase58} = require('./utils.js')
const codec = require('ripple-binary-codec')

const manifest = process.env['MANIFEST']

let parsed = codec.decode(base64toHex(manifest))

parsed.PublicKey = hextoBase58(parsed.PublicKey)
parsed.SigningPubKey = hextoBase58(parsed.SigningPubKey)

console.log(JSON.stringify(parsed, null, 2))
