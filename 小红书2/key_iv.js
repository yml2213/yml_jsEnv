const numbers = [52, 104, 114, 105, 118, 103, 119, 53, 115, 51, 52, 50, 102, 57, 98, 50];
// 将数组分成4个子数组
const subArrays = [];
for (let i = 0; i < numbers.length; i += 4) {
    subArrays.push(numbers.slice(i, i + 4));
}
// 将每个子数组的大端字节序字节数组转换为一个uint32类型的值
const uint32Values = subArrays.map(subArray => {
    const bytes = subArray.map(num => num & 0xff);
    return uint32FromBytesBigEndian(bytes);
});
function uint32FromBytesBigEndian(bytes) {
    return ((bytes[3] << 24) | (bytes[2] << 16) | (bytes[1] << 8) | bytes[0]) >>> 0;
}
console.log(uint32Values);
