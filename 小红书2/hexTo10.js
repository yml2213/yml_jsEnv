function hexArrayToDecimalArray(hexArray) {
  return hexArray.map(hexString => parseInt(hexString, 16));
}

// 示例使用：
const hexArray = [0x52, 0x09, 0x6a, 0xd5, 0x30];
const decimalArray = hexArrayToDecimalArray(hexArray);
console.log(decimalArray); // 输出: [26, 47, 255, 16]
