import {xor_hex, xor_hex_fill, left_move, to_4binary, binary_to_hex} from "./ByteUtil";

/*
* S盒
*/
let S_BOX = [
  0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
  0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0,
  0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15,
  0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75,
  0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84,
  0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf,
  0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8,
  0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2,
  0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
  0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb,
  0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79,
  0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08,
  0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a,
  0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e,
  0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf,
  0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16,
];

/*
* 逆S盒
*/
let INVERSE_S_BOX = [
  0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb,
  0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb,
  0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e,
  0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25,
  0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92,
  0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84,
  0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06,
  0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b,
  0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73,
  0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e,
  0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b,
  0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4,
  0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f,
  0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef,
  0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61,
  0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d,
];

/**
 * 密钥扩展时使用
 * @type {number[]}
 */
let R_CON = [
  0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36
];

/**
 * 列混淆时使用的矩阵
 */
let MIX_MATRIX = [
  '02', '03', '01', '01',
  '01', '02', '03', '01',
  '01', '01', '02', '03',
  '03', '01', '01', '02',
];

/**
 * 列混淆时使用的矩阵
 */
let INVERSE_MIX_MATRIX = [
  '0e', '0b', '0d', '09',
  '09', '0e', '0b', '0d',
  '0d', '09', '0e', '0b',
  '0b', '0d', '09', '0e',
];

/**
 * 字节替换
 * @param byte 2位16进制数，8bit
 * @param inverse 是否逆运算
 * @returns {string} 经过字节替换后的8bit
 */
let sub_bytes = (byte, inverse = false) => {
  if (byte.length !== 2) {
    console.log("出错信息")
    console.log(byte);
    throw new Error("字节替换的参数应该为2位16进制");
  }
  let hex = parseInt(byte[0], 16);
  let low = parseInt(byte[1], 16);
  // 记得补0
  if (!inverse) {
    return S_BOX[hex * 16 + low].toString(16).padStart(2, '0');
  } else {
    return INVERSE_S_BOX[hex * 16 + low].toString(16).padStart(2, '0');
  }
};

/**
 * 将十六进制的字符串每8位进行一次s盒替换
 * @param hexText 十六进制字符串
 * @param inverse 是否逆运算
 * @returns {string}
 */
let hex_sub_bytes = (hexText, inverse = false) => {
  let result = "";
  for (let i = 0; i < hexText.length; i += 2) {
    result += sub_bytes(hexText.substr(i, 2), inverse);
  }
  return result;
}

/**
 * 数组移动位置
 * @param array 指定一维数组
 * @param number 移动位数
 * @param isLeft 是否为左移
 */
let shift_array = (array, number, isLeft) => {
  let size = 4;
  let result = [4];
  for (let i = 0; i < 4; i++) {
    let shift_index;
    if (isLeft) {
      shift_index = (i + number + size) % size;
    } else {
      shift_index = (i - number + size) % size;
    }
    result[i] = array.substr(shift_index * 2, 2);
  }
  return result;
};

// 一维数组转二维时有错位的问题
// let array1_to_array2 = (array1) => {
//   console.log(array1);
//   let result = [];
//   for (let i = 0; i < 4; i++) {
//     result[i] = [];
//   }
//   // result[0] = array1.slice(0, 4);
//   // result[0] = array1.slice(4, 8);
//   // result[0] = array1.slice(8, 12);
//   // result[0] = array1.slice(12, 16);
//   console.log(array1.slice(0, 4))
//   console.log(array1.slice(4, 8))
//   console.log(array1.slice(8, 12))
//   console.log(array1.slice(12, 16))
//   result.push(array1.slice(0, 4));
//   result.push(array1.slice(4, 8));
//   result.push(array1.slice(8, 12));
//   result.push(array1.slice(12, 16));
//   // for (let i = 0; i < array1.length; i += size) {
//   //   // let temp = [];
//   //   // for (let j = 0; j < size; j++) {
//   //   //   temp.push(array1[i + j]);
//   //   // }
//   //   // result.push(JSON.parse(JSON.stringify(temp)));
//   //   result.push(array1.slice(i, i + size));
//   // }
//   console.log(result);
//   return result.slice(4, 8);
// }


/**
 * 转置128bit文本
 * @param hexText 16进制文本
 * @returns {string}
 */
let transpose = (hexText) => {
  let result = "";
  result += hexText.substr(0, 2)
            + hexText.substr(8, 2)
            + hexText.substr(16, 2)
            + hexText.substr(24, 2);
  result += hexText.substr(2, 2)
    + hexText.substr(10, 2)
    + hexText.substr(18, 2)
    + hexText.substr(26, 2);
  result += hexText.substr(4, 2)
    + hexText.substr(12, 2)
    + hexText.substr(20, 2)
    + hexText.substr(28, 2);
  result += hexText.substr(6, 2)
    + hexText.substr(14, 2)
    + hexText.substr(22, 2)
    + hexText.substr(30, 2);
  return result;
}

/**
 * 将字符串数组转成字符串
 * @param array
 * @returns {string}
 */
let array_to_str = (array) => {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

/**
 * 行移位
 * @param state 指定状态数组
 * @param inverse 是否逆运算
 */
let shift_rows = (state, inverse = false) => {
  let result = [];
  state = transpose(state);
  if (!inverse) {
    result = result.concat(shift_array(state.slice(0, 8), 0, true))
    result = result.concat(shift_array(state.slice(8, 16), 1, true))
    result = result.concat(shift_array(state.slice(16, 24), 2, true));
    result = result.concat(shift_array(state.slice(24, 32), 3, true));
  } else {
    result = result.concat(shift_array(state.slice(0, 8), 0, false))
    result = result.concat(shift_array(state.slice(8, 16), 1, false))
    result = result.concat(shift_array(state.slice(16, 24), 2, false));
    result = result.concat(shift_array(state.slice(24, 32), 3, false));
  }
  result = transpose(array_to_str(result))
  return result;
};

/**
 * 02 异或乘法
 * @param hexText
 * @returns {string}
 */
let hex_multi_02 = (hexText) => {
  // 未移位前的最高位
  let highBit = to_4binary(hexText).charAt(0);
  // 左移一位
  let leftTemp = to_4binary(hexText).substr(1, 7).padEnd(8, '0');
  // 如果未移位的最高位为1，则与1b异或
  if (highBit === '1') {
    return xor_hex(binary_to_hex(leftTemp), '1b');
  }
  // 将二进制转成16进制输出
  return binary_to_hex(leftTemp);
}

/**
 * 04 异或乘法
 * @param hexText
 * @returns {string}
 */
let hex_multi_04 = (hexText) => {
  // 该乘法不一定满足结合律
  // 02 * hex + 02 * hex
  // xor_hex(hex_multi_02(hexText), hex_multi_02(hexText));
  // 02 * 02 * hex
  return hex_multi_02(hex_multi_02(hexText));
}

let hex_multi_08 = (hexText) => {
  return hex_multi_04(hex_multi_02(hexText));
}

/**
 * 16进制aes乘法
 * @param a 混淆矩阵的值
 * @param b 数据矩阵的数据
 * @returns {string}
 */
let hex_multi = (a, b) => {
  if (a === '02') {
    return hex_multi_02(b);
  } else if (a === '03') {
    // '03' * b = '01' * b xor '02' * b
    return xor_hex(b, hex_multi_02(b));
  } else if (a === '01') {
    // '01'返回自身
    return b;
  } else if (a === '0e' || a === '0E') {
    return xor_hex(xor_hex(hex_multi_08(b), hex_multi_04(b)), hex_multi_02(b));
  } else if (a === '0b' || a === '0B') {
    return xor_hex(b, xor_hex(hex_multi_08(b), hex_multi_02(b)));
  } else if (a === '0d' || a === '0D') {
    return xor_hex(b, xor_hex(hex_multi_08(b), hex_multi_04(b)));
  } else if (a === '09') {
    return xor_hex(b, hex_multi_08(b));
  }
}

/**
 * 混淆矩阵的一行与数据矩阵的一列相乘
 * @param matrixIndex 矩阵某一行
 * @param x1 数据矩阵一行的第一个
 * @param x2 数据矩阵一行的第二个
 * @param x3 数据矩阵一行的第三个
 * @param x4 数据矩阵一行的第四个
 * @param inverse 是否逆运算
 * @returns {string} 异或后的结果
 */
let hex_mix = (matrixIndex, x1, x2, x3, x4, inverse = false) => {
  let temp1 = !inverse ? hex_multi(MIX_MATRIX[matrixIndex * 4], x1) : hex_multi(INVERSE_MIX_MATRIX[matrixIndex * 4], x1);
  let temp2 = !inverse ? hex_multi(MIX_MATRIX[matrixIndex * 4 + 1], x2) : hex_multi(INVERSE_MIX_MATRIX[matrixIndex * 4 + 1], x2);
  let temp3 = !inverse ? hex_multi(MIX_MATRIX[matrixIndex * 4 + 2], x3) : hex_multi(INVERSE_MIX_MATRIX[matrixIndex * 4 + 2], x3);
  let temp4 = !inverse ? hex_multi(MIX_MATRIX[matrixIndex * 4 + 3], x4) : hex_multi(INVERSE_MIX_MATRIX[matrixIndex * 4 + 3], x4);
  return xor_hex(temp4, xor_hex(temp3, xor_hex(temp1, temp2)));
}

/**
 * 列混淆
 * @param hexText 指定状态数组
 * @param inverse 是否逆运算
 */
let mix_columns = (hexText, inverse = false) => {
  let result = [];
  for (let i = 0; i < 4; i++) {
    let temp = [];
    temp[0] = hex_mix(0, hexText.substr(i * 8, 2), hexText.substr(i * 8 + 2, 2), hexText.substr(i * 8 + 4, 2), hexText.substr(i * 8 + 6, 2), inverse);
    temp[1] = hex_mix(1, hexText.substr(i * 8, 2), hexText.substr(i * 8 + 2, 2), hexText.substr(i * 8 + 4, 2), hexText.substr(i * 8 + 6, 2), inverse);
    temp[2] = hex_mix(2, hexText.substr(i * 8, 2), hexText.substr(i * 8 + 2, 2), hexText.substr(i * 8 + 4, 2), hexText.substr(i * 8 + 6, 2), inverse);
    temp[3] = hex_mix(3, hexText.substr(i * 8, 2), hexText.substr(i * 8 + 2, 2), hexText.substr(i * 8 + 4, 2), hexText.substr(i * 8 + 6, 2), inverse);
    result = result.concat(temp);
  }
  return result;
}

/**
 * 密钥扩展时的T运算
 * @param input 32位文本
 * @param index R_CON的索引值
 * @returns {string}
 * @constructor
 */
let T = (input, index) => {
  // 输入左移一位
  let leftResult = left_move(input, 2);
  // 对每个字节进行s盒替换
  let subResult = sub_bytes(leftResult.substr(0, 2))
                + sub_bytes(leftResult.substr(2, 2))
                + sub_bytes(leftResult.substr(4, 2))
                + sub_bytes(leftResult.substr(6, 2));
  // 对每个字节与R_CON进行异或
  let xorResult = xor_hex(subResult.substr(0, 2).padStart(2, '0'), R_CON[index].toString(16).padStart(2, '0'))
                + xor_hex(subResult.substr(2, 2).padStart(2, '0'), '00')
                + xor_hex(subResult.substr(4, 2).padStart(2, '0'), '00')
                + xor_hex(subResult.substr(6, 2).padStart(2, '0'), '00');
  return xorResult;
}

/**
 * 密钥扩展
 * @param hexKey
 * @returns {string|*}
 */
let key_extended = (hexKey) => {
  // 因为key值为16进制，所以128位密钥长度为32
  if (hexKey.length < 32) {
    return "长度不足128位"
  }
  let result = [];
  let index = 0;
  // 前4轮就是基本密钥
  for (let i = 0; i < 4; i++) {
    let temp = '';
    temp += hexKey.substr(index, 2);
    index += 2;
    temp += hexKey.substr(index, 2);
    index += 2;
    temp += hexKey.substr(index, 2);
    index += 2;
    temp += hexKey.substr(index, 2);
    index += 2;
    result.push(temp)
  }
  // 后四十轮通过计算
  for (let i = 4; i < 44; i++) {
    let temp = '';
    // 4 8 12... 等等通过T函数再次异或
    // 其余的为异或
    if (i % 4 === 0) {
      temp = xor_hex(result[i - 4], T(result[i - 1], i / 4))
    } else {
      temp = xor_hex(result[i - 4], result[i - 1]);
    }
    result.push(temp);
  }
  return result;
};

/**
 * aes 128位加密
 * @param hexText 16进制128位文本
 * @param hexKey 16进制128位密钥
 * @returns {string}
 */
let aes_encrypt = (hexText, hexKey) => {
  if (hexText === null || hexKey === null) {
    return "长度不足64位"
  }
  if (hexText.length < 32 || hexKey.length < 32) {
    return '文本或密钥长度不足128位';
  }
  // 获取扩展密钥数组
  let extendedKeys = key_extended(hexKey);
  // console.log("扩展密钥")
  // console.log(extendedKeys)
  // 明文和第一组密钥 0,1,2,3 异或
  let tempText = xor_hex_fill(hexText.substr(0, 8), extendedKeys[0])
                    + xor_hex_fill(hexText.substr(8, 8), extendedKeys[1])
                    + xor_hex_fill(hexText.substr(16, 8), extendedKeys[2])
                    + xor_hex_fill(hexText.substr(24, 8), extendedKeys[3]);
  // 中间9轮加密
  for (let i = 0; i < 9; i++) {
    console.log("第" + (i + 1) + '轮：')
    let subTemp = hex_sub_bytes(tempText);
    console.log('s盒替换 :' + subTemp);
    let shiftTemp = shift_rows(subTemp);
    console.log('左移    :' + shiftTemp)
    let mixTemp = mix_columns(shiftTemp);
    mixTemp = array_to_str(mixTemp);
    console.log('混淆    :' + mixTemp)
    tempText = xor_hex_fill(mixTemp.substr(0, 8), extendedKeys[i * 4 + 4])
      + xor_hex_fill(mixTemp.substr(8, 8), extendedKeys[i * 4 + 5])
      + xor_hex_fill(mixTemp.substr(16, 8), extendedKeys[i * 4 + 6])
      + xor_hex_fill(mixTemp.substr(24, 8), extendedKeys[i * 4 + 7])
    console.log('轮密钥加:' + tempText)
  }
  // 第十轮
  console.log('第10轮：')
  // s盒替换
  tempText = hex_sub_bytes(tempText);
  console.log('s盒替换 :' + tempText);
  // 行移位
  tempText = shift_rows(tempText);
  console.log('左移    :' + tempText);
  let cipher = xor_hex_fill(tempText.substr(0, 8), extendedKeys[40])
    + xor_hex_fill(tempText.substr(8, 8), extendedKeys[41])
    + xor_hex_fill(tempText.substr(16, 8), extendedKeys[42])
    + xor_hex_fill(tempText.substr(24, 8), extendedKeys[43])
  console.log("密文输出: " + cipher);
  return cipher;
}

/**
 * aes 128位解密
 * @param hexText
 * @param hexKey
 * @returns {string}
 */
let aes_decrypt = (hexCipher, hexKey) => {
  if (hexCipher === null || hexKey === null) {
    return "长度不足64位"
  }
  if (hexCipher.length < 32 || hexKey.length < 32) {
    return '文本或密钥长度不足128位';
  }
  // 获取扩展密钥数组
  let extendedKeys = key_extended(hexKey);
  // 轮密钥加 W[40-43]
  let tempText = xor_hex_fill(hexCipher.substr(0, 8), extendedKeys[40])
    + xor_hex_fill(hexCipher.substr(8, 8), extendedKeys[41])
    + xor_hex_fill(hexCipher.substr(16, 8), extendedKeys[42])
    + xor_hex_fill(hexCipher.substr(24, 8), extendedKeys[43]);
  console.log("w[40-43]:" + tempText);
  // 中间9轮加密
  for (let i = 0; i < 9; i++) {
    console.log("第" + (i + 1) + '轮：')
    // 逆行移位
    let shiftTemp = shift_rows(tempText, true);
    console.log('逆行运算  :' + shiftTemp)
    let subTemp = hex_sub_bytes(shiftTemp, true);
    console.log("逆s盒替换 :" + subTemp)
    tempText = xor_hex_fill(subTemp.substr(0, 8), extendedKeys[36 - i * 4])
      + xor_hex_fill(subTemp.substr(8, 8), extendedKeys[36 - i * 4 + 1])
      + xor_hex_fill(subTemp.substr(16, 8), extendedKeys[36 - i * 4 + 2])
      + xor_hex_fill(subTemp.substr(24, 8), extendedKeys[36 - i * 4 + 3])
    console.log("轮密钥加 :" + tempText)
    let mixTemp = mix_columns(tempText, true);
    tempText = array_to_str(mixTemp);
    console.log("逆列混淆 :" + tempText)
  }
  // 第十轮
  console.log('第十轮：')
  // 逆行移位
  tempText = shift_rows(tempText, true);
  // 逆s盒替换
  tempText = hex_sub_bytes(tempText, true);
  let cipher = xor_hex_fill(tempText.substr(0, 8), extendedKeys[0])
    + xor_hex_fill(tempText.substr(8, 8), extendedKeys[1])
    + xor_hex_fill(tempText.substr(16, 8), extendedKeys[2])
    + xor_hex_fill(tempText.substr(24, 8), extendedKeys[3])
  console.log("明文输出: " + cipher);
  return cipher;
}

export default {
  aes_encrypt,
  aes_decrypt,
}


a=aes_encrypt()