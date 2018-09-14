const addressCodec = require('ripple-address-codec')

function toBytes(data) {
  return new Buffer(data, 'hex').toJSON().data;
}

function base58toHex (data) {
  var public_bytes = addressCodec.decodeNodePublic(data)
  return new Buffer(public_bytes).toString('hex').toUpperCase()
}

function hextoBase58 (data) {
  return addressCodec.encodeNodePublic(toBytes(data)) 
}

function base64toHex (data) {
  return new Buffer(data, 'base64').toString('hex').toUpperCase();
}

function hextoBase64 (data) {
  return new Buffer(data, 'hex').toString('base64');
}

module.exports = {
  base58toHex,
  hextoBase58,
  base64toHex,
  hextoBase64
}
