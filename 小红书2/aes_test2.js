const aesjs = require('aes-js');

// 明文
let data=`x1=0af212d34942fbbfb3e0fd5802332b29;x2=0|0|0|1|0|0|1|0|0|0|1|0|0|0|0|1|0|0|0;x3=19106c24c90uq4kbvzglto38naaecznf3yk1slnre50000220941;x4=1727033536336;`

const text = 'eDE9MGFmMjEyZDM0OTQyZmJiZmIzZTBmZDU4MDIzMzJiMjk7eDI9MHwwfDB8MXwwfDB8MXwwfDB8MHwxfDB8MHwwfDB8MXwwfDB8MDt4Mz0xOTEwNmMyNGM5MHVxNGtidnpnbHRvMzhuYWFlY3puZjN5azFzbG5yZTUwMDAwMjIwOTQxO3g0PTE3MjcwMzM1MzYzMzY7';

// 将文本转换为字节数组
const textBytes = aesjs.utils.utf8.toBytes(text);

// 生成一个 128 位 (16 字节) 的密钥
const key = aesjs.utils.utf8.toBytes('glt6h61ta7kisow7'); // 16 字节密钥

// 生成一个随机的 16 字节初始化向量
const iv = aesjs.utils.utf8.toBytes('4hrivgw5s342f9b2'); // 示例中的 IV，实际应用中请使用随机生成的值

// 创建 AES CBC 加密器
const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);

// 填充明文以成为 16 字节的倍数
const paddedTextBytes = aesjs.padding.pkcs7.pad(textBytes);

// 加密
const encryptedBytes = aesCbc.encrypt(paddedTextBytes);
console.log('Encrypted:', aesjs.utils.hex.fromBytes(encryptedBytes));

// 解密
const aesCbcDecrypt = new aesjs.ModeOfOperation.cbc(key, iv);
const decryptedBytes = aesCbcDecrypt.decrypt(encryptedBytes);

// 去除填充
const unpaddedDecryptedBytes = aesjs.padding.pkcs7.strip(decryptedBytes);

// 将解密后的字节转换回文本
const decryptedText = aesjs.utils.utf8.fromBytes(unpaddedDecryptedBytes);
console.log('Decrypted:', decryptedText);
