/*
Write code that checks whether the string byteSequence contains the character x.
*/

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

let re = /x/;

console.log(re.test(byteSequence));
console.log(byteSequence.match(re));