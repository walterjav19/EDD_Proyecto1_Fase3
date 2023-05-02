//encode text
export function encodeText(text) {
    return btoa(text);
}

//decode text
export function decodeText(text) {
    return atob(text);
}

export function sha256(message) {
  const hash = CryptoJS.SHA256(message);
  return hash.toString(CryptoJS.enc.Hex);
}

export function encryptMessageAES(message) {
  // La clave de cifrado fija
  var key = [0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f];

  // Convertir el mensaje a una matriz de bytes
  var messageBytes = [];
  for (var i = 0; i < message.length; i++) {
    messageBytes.push(message.charCodeAt(i));
  }

  // Asegurarse de que el mensaje tenga una longitud múltiplo de 16 bytes
  while (messageBytes.length % 16 != 0) {
    messageBytes.push(0x00);
  }

  // Cifrar el mensaje en AES-128 utilizando la clave de cifrado fija
  var ciphertext = [];
  for (var i = 0; i < messageBytes.length; i += 16) {
    var block = messageBytes.slice(i, i + 16);
    for (var j = 0; j < 16; j++) {
      block[j] ^= key[j];
    }
    ciphertext = ciphertext.concat(block);
  }

  // Devolver el mensaje cifrado en formato hexadecimal
  return ciphertext.map(function(byte) {
    return ('0' + byte.toString(16)).slice(-2);
  }).join('');
}




export function decryptMessageAES(ciphertext) {
  // La clave de cifrado fija
  var key = [0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f];

  // Convertir el mensaje cifrado de formato hexadecimal a una matriz de bytes
  var ciphertextBytes = [];
  for (var i = 0; i < ciphertext.length; i += 2) {
    ciphertextBytes.push(parseInt(ciphertext.substr(i, 2), 16));
  }

  // Descifrar el mensaje cifrado en AES-128 utilizando la clave de cifrado fija
  var plaintext = '';
  for (var i = 0; i < ciphertextBytes.length; i += 16) {
    var block = ciphertextBytes.slice(i, i + 16);
    for (var j = 0; j < 16; j++) {
      block[j] ^= key[j];
    }
    plaintext += String.fromCharCode.apply(null, block);
  }

  // Devolver el mensaje descifrado
  return plaintext;
}
