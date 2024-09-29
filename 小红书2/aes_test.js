const aesjs = require('aes-js');

// 明文
const text = 'eDE9MGFmMjEyZDM0OTQyZmJiZmIzZTBmZDU4MDIzMzJiMjk7eDI9MHwwfDB8MXwwfDB8MXwwfDB8MHwxfDB8MHwwfDB8MXwwfDB8MDt4Mz0xOTEwNmMyNGM5MHVxNGtidnpnbHRvMzhuYWFlY3puZjN5azFzbG5yZTUwMDAwMjIwOTQxO3g0PTE3MjcwMzM1MzYzMzY7';  // x1=922090572339b2ab0ca6aa5f07f178be;x2=0|0|0|1|0|0|1|0|0|0|1|0|0|0|0|1|0|0|0;x3=1921f07c560p2uuir7tk1g47opxph2j0vo8mxg2v350000180320;x4=1727033536336;
const text2 = 'eDE9OTIyMDkwNTcyMzM5YjJhYjBjYTZhYTVmMDdmMTc4YmU7eDI9MHwwfDB8MXwwfDB8MXwwfDB8MHwxfDB8MHwwfDB8MXwwfDB8MDt4Mz0xOTIyNmVhNGU3ZDcxZ3lhY3FzNmRpYWl1YmRreGl3NnA2NjVldWs2ajUwMDAwMTM0Njg2O3g0PTE3MjcyMzEwODQxNTA7'; //  x1=922090572339b2ab0ca6aa5f07f178be;x2=0|0|0|1|0|0|1|0|0|0|1|0|0|0|0|1|0|0|0;x3=19226ea4e7d71gyacqs6diaiubdkxiw6p665euk6j50000134686;x4=1727231084150;

// eDE9MGFmMjEyZDM0OTQyZmJiZmIzZTBmZDU4MDIzMzJiMjk7eDI9MHwwfDB8MXwwfDB8MXwwfDB8MHwxfDB8MHwwfDB8MXwwfDB8MDt4Mz0xOTEwNmMyNGM5MHVxNGtidnpnbHRvMzhuYWFlY3puZjN5azFzbG5yZTUwMDAwMjIwOTQxO3g0PTE3MjcwMzM1MzYzMzY7    // x1=0af212d34942fbbfb3e0fd5802332b29;x2=0|0|0|1|0|0|1|0|0|0|1|0|0|0|0|1|0|0|0;x3=19106c24c90uq4kbvzglto38naaecznf3yk1slnre50000220941;x4=1727033536336;
// 将文本转换为字节数组
const textBytes = aesjs.utils.utf8.toBytes(text);
// const textBytes = [101, 68, 69, 57, 77, 71, 70, 109, 77, 106, 69, 121, 90, 68, 77, 48, 79, 84, 81, 121, 90, 109, 74, 105, 90, 109, 73, 122, 90, 84, 66, 109, 90, 68, 85, 52, 77, 68, 73, 122, 77, 122, 74, 105, 77, 106, 107, 55, 101, 68, 73, 57, 77, 72, 119, 119, 102, 68, 66, 56, 77, 88, 119, 119, 102, 68, 66, 56, 77, 88, 119, 119, 102, 68, 66, 56, 77, 72, 119, 120, 102, 68, 66, 56, 77, 72, 119, 119, 102, 68, 66, 56, 77, 88, 119, 119, 102, 68, 66, 56, 77, 68, 116, 52, 77, 122, 48, 120, 79, 84, 69, 119, 78, 109, 77, 121, 78, 71, 77, 53, 77, 72, 86, 120, 78, 71, 116, 105, 100, 110, 112, 110, 98, 72, 82, 118, 77, 122, 104, 117, 89, 87, 70, 108, 89, 51, 112, 117, 90, 106, 78, 53, 97, 122, 70, 122, 98, 71, 53, 121, 90, 84, 85, 119, 77, 68, 65, 119, 77, 106, 73, 119, 79, 84, 81, 120, 79, 51, 103, 48, 80, 84, 69, 51, 77, 106, 99, 119, 77, 122, 77, 49, 77, 122, 89, 122, 77, 122, 89, 55]

// console.log(textBytes1==textBytes)
// 生成一个 128 位 (16 字节) 的密钥
const key = aesjs.utils.utf8.toBytes('glt6h61ta7kisow7'); // 16 字节密钥
// const key = [77, 122, 77, 53, 89, 106, 74, 104, 89, 106, 66, 106, 89, 84, 90, 104]   // MzM5YjJhYjBjYTZh

// 生成一个随机的 16 字节初始化向量
const iv = aesjs.utils.utf8.toBytes('4hrivgw5s342f9b2'); // 示例中的 IV，实际应用中请使用随机生成的值
// const iv =[52, 104, 114, 105, 118, 103, 119, 53, 115, 51, 52, 50, 102, 57, 98, 50]
//  [81, 44, 55, 80, 59, 32, 49, 88, 62, 89, 113, 75, 60, 125, 47, 2]
//  [52, 104, 114, 105, 118, 103, 119, 53, 115, 51, 52, 50, 102, 57, 98, 50]


// 创建 AES CBC 加密器
const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);

// 填充明文以成为 16 字节的倍数
const paddedTextBytes = aesjs.padding.pkcs7.pad(textBytes);


// 加密
const encryptedBytes = aesCbc.encrypt(paddedTextBytes);


const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes)
console.log(encryptedHex)

console.log('Encrypted:', encryptedHex);
console.log('Encrypted:', encryptedHex.length);


let sus = "96fd39fc34c905076d5571c5fbf975c0bd745c44ea8225d5756cf87cd77ebd74882d49e4740a8fe9f6fa88cbd156df8039a060a3869f1a78187b41819bb28f0079bd71b27116146e51c9b696ae1c3c88ae31499a5baa6587bfb335ff3c7d8a7a16c552c4e42c6c23f0f54f4661e7a6cdc95cb5a84bf12b7851b6f77e757ef6f76f4043e2c4f877318d9300af3426873c2614632573717da75775a471ee8b8898b135b9009fb219437ff970eca5f0c394fc607162e5234f58276878075fbae5c8920e8b44e84a7f0ed0b46bc2740dc3ca"

console.log(`正确:====> ${sus}`)
console.log(`正确:====> ${sus.length}`);
console.log(encryptedHex == sus)


let en_data = "96fd39fc34c905076d5571c5fbf975c0bd745c44ea8225d5756cf87cd77ebd74882d49e4740a8fe9f6fa88cbd156df8039a060a3869f1a78187b41819bb28f0079bd71b27116146e51c9b696ae1c3c88ae31499a5baa6587bfb335ff3c7d8a7a16c552c4e42c6cf0f54f4661e7a6cdc95cb5a84bf12b7851b6f77e757ef6f76f4043e2c4f877318d9300af3426873c2614632573717da75775a471ee8b8898b135b9009fb219437ff970eca5f0c394fc607162e5234f58276878075fbae5c8920e8b44e84a7f0ed0b46bc2740dc3ca"
let en_data2 = "96fd39fc34c905076d5571c5fbf975c0bd745c44ea8225d5756cf87cd77ebd74882d49e4740a8fe9f6fa88cbd156df8039a060a3869f1a78187b41819bb28f0079bd71b27116146e51c9b696ae1c3c88ae31499a5baa6587bfb335ff3c7d8a7a16c552c4e42c6c23f0f54f4661e7a6cdc95cb5a84bf12b7851b6f77e757ef6f76f4043e2c4f877318d9300af3426873c2614632573717da75775a471ee8b8898b135b9009fb219437ff970eca5f0c394fc607162e5234f58276878075fbae5c8920e8b44e84a7f0ed0b46bc2740dc3ca"
// 解密
//
// const testBytes = aesjs.utils.utf8.toBytes(en_data);
// const aesCbcDecrypt = new aesjs.ModeOfOperation.cbc(key, iv);
// const decryptedBytes = aesCbcDecrypt.decrypt(testBytes);
//
// // 去除填充
// const unpaddedDecryptedBytes = aesjs.padding.pkcs7.strip(decryptedBytes);
//
// // 将解密后的字节转换回文本
// const decryptedText = aesjs.utils.utf8.fromBytes(unpaddedDecryptedBytes);
// console.log('Decrypted:', decryptedText);
