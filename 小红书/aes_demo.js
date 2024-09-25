const aesjs = require("aes-js")

function getArray(string_) {
    let array = [];
    for (let i = 0; i < string_.length; i++) {
        array.push(string_.charCodeAt(i));
    }
    return array;
}

// console.log(getArray("6@CfQ\x05\x0f8_@4,[\x02v|"));

let key = [54, 64, 67, 102, 81, 5, 15, 56, 95, 64, 52, 44, 91, 2, 118, 124];
let iv = [81, 44, 55, 80, 59, 35, 27, 95, 60, 100, 109, 6, 41, 109, 1, 2];  // Q,7P93>L>w_E(mK
// let iv = [52, 104, 114, 105, 118, 103, 119, 53, 115, 51, 52, 50, 102, 57, 98, 50];  // 乱码


let data = [
  101,
  68,
  69,
  57,
  77,
  68,
  108,
  106,
  79,
  87,
  89,
  52,
  79,
  84,
  99,
  48,
  90,
  84,
  73,
  122,
  77,
  87,
  77,
  51,
  78,
  71,
  90,
  108,
  79,
  84,
  89,
  53,
  90,
  68,
  100,
  104,
  90,
  71,
  81,
  121,
  77,
  106,
  82,
  104,
  79,
  71,
  69,
  55,
  101,
  68,
  73,
  57,
  77,
  72,
  119,
  119,
  102,
  68,
  66,
  56,
  77,
  88,
  119,
  119,
  102,
  68,
  66,
  56,
  77,
  88,
  119,
  119,
  102,
  68,
  66,
  56,
  77,
  72,
  119,
  120,
  102,
  68,
  66,
  56,
  77,
  72,
  119,
  119,
  102,
  68,
  66,
  56,
  77,
  88,
  119,
  119,
  102,
  68,
  66,
  56,
  77,
  68,
  116,
  52,
  77,
  122,
  48,
  120,
  79,
  84,
  73,
  121,
  77,
  122,
  108,
  105,
  79,
  68,
  65,
  121,
  89,
  87,
  86,
  120,
  99,
  109,
  100,
  109,
  97,
  87,
  108,
  105,
  78,
  50,
  70,
  111,
  100,
  109,
  52,
  121,
  100,
  51,
  77,
  121,
  97,
  88,
  70,
  53,
  101,
  68,
  90,
  107,
  78,
  71,
  53,
  53,
  78,
  71,
  107,
  119,
  101,
  68,
  77,
  119,
  77,
  68,
  65,
  119,
  77,
  122,
  65,
  119,
  77,
  84,
  103,
  48,
  79,
  51,
  103,
  48,
  80,
  84,
  69,
  51,
  77,
  106,
  99,
  119,
  77,
  122,
  77,
  49,
  77,
  122,
  89,
  122,
  77,
  122,
  89,
  55,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8
]
// let data = [101, 68, 69, 57, 79, 84, 73, 121, 77, 68, 107, 119, 78, 84, 99, 121, 77, 122, 77, 53, 89, 106, 74, 104, 89, 106, 66, 106, 89, 84, 90, 104, 89, 84, 86, 109, 77, 68, 100, 109, 77, 84, 99, 52, 89, 109, 85, 55, 101, 68, 73, 57, 77, 72, 119, 119, 102, 68, 66, 56, 77, 88, 119, 119, 102, 68, 66, 56, 77, 88, 119, 119, 102, 68, 66, 56, 77, 72, 119, 120, 102, 68, 66, 56, 77, 72, 119, 119, 102, 68, 66, 56, 77, 88, 119, 119, 102, 68, 66, 56, 77, 68, 116, 52, 77, 122, 48, 120, 79, 84, 73, 121, 77, 50, 89, 48, 79, 87, 73, 52, 78, 109, 70, 112, 89, 109, 99, 119, 99, 51, 82, 51, 101, 87, 49, 51, 100, 109, 112, 122, 90, 71, 90, 115, 100, 110, 99, 119, 101, 71, 81, 51, 79, 72, 70, 109, 98, 50, 74, 108, 100, 122, 85, 119, 77, 68, 65, 119, 77, 106, 65, 119, 78, 84, 69, 122, 79, 51, 103, 48, 80, 84, 69, 51, 77, 106, 99, 119, 77, 122, 77, 49, 77, 122, 89, 122, 77, 122, 89, 55, 8, 8, 8, 8, 8, 8, 8, 8]



// 计算 pkcs#7 填充长度
let paddingLength = 16 - (data.length % 16);
if (paddingLength === 0) {
    paddingLength = 16;  // 如果16 倍数,填充整个块
}

// 应用 pkcs#7 填充
for (let i = 0; i < paddingLength.length; i++) {
    data.push(paddingLength);
}

// console.log(data.slice(10));
// console.log(data.slice(-10));

// 初始化 key iv
let aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
//
// 加密数据
let encryptBytes = aesCbc.encrypt(data);
//
// 将加密后的数据转换成 Hex 编码
let encryptHex = aesjs.utils.hex.fromBytes(encryptBytes);
//
console.log(`encryptHex==>  ${encryptHex}`);
//
// let x_t = `{"signSvn":"55","signType":"x2","appId":"xhs-pc-web","signVersion":"1","payload":"${encryptHex}"}`
// console.log("x_t----> ", x_t)
// // 59f6fde8a570dffa874fa3baaf8634db8f5f5550b07cfa4e52344ed502f6aeed298972d629cccff46b1401209a6b08990ce1aebafde98b77499be8bbc76e3b2462180ab0aab6fde1956f96ea58da92d975dcd3db85a172a26f1ea71c8a3fc6dc19e54c9ed4d131d34824e234e0fbbb7fc9f93461d2f4c60aeb2aa6c501f37490521f98ef4d68acce45ed2d6a0fac1ef6084edbd343bcc03cd5261bd7fb17b8e893d080988fba20571a55520f672ffbd8097e384867b6281c6dd4adcc2bfa73651aa2f5bcb0bc56218336d3f254c7abab
// 582d093f391382da8e61bd710f6b0de03d3638f8397649e40c6d9f269e28af66d1dd2ecb9e186fea33b9ef470b668fc0a5c2d16d569f9c369490f17204ae9815f49fdbcc4d467c5062df6841574977e2de084a2e9bffc2f9e116841ef119f1a06b68da7c6ee391f537c0bf1c306f3995f179f830a534ce86df74f40325857957dc044f48565159f789ba1557a942f6a3e3f4788a7c42f9b9e06ddb7ba73e97de3ead29350fb55a52f2c7d7bdbfaa26bead1df7ff36d66f82827a101f8c271932e68488afeecad7d724ca70052d2963da
