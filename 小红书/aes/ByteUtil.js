// 左移
export let left_move = (text, number) => {
    if (text == null) {
      return null;
    }
    let result = "";
    for (let i = number; i < text.length; i++) {
      result += text.charAt(i);
    }
    for (let i = 0; i < number; i++) {
      result += text.charAt(i);
    }
    return result;
  }
  
  // 将字符串转化为ASCII
  export let to_8binary = (text) => {
    if (text == null) {
      return null;
    }
    let binary = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode > 255) {
        throw new SyntaxError;
      }
      binary += charCode.toString(2).padStart(8, '0');
    }
    return binary;
  }
  
  // 将字符串转化为4位二进制格式,比如to_4binary(13)=00010011
  export let to_4binary = (text) => {
    if (text == null) {
      return null;
    }
    let binary = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = parseInt(text.charAt(i), 16).toString(2);
      binary += charCode.padStart(4, '0');
    }
    return binary;
  }
  
  /**
   * 将二进制字符串转成16进制
   * @param bin
   * @returns {string}
   */
  let bin_to_hex = (bin) => {
    return parseInt(bin, 2).toString(16);
  }
  
  // 将10进制换成4位二进制
  export let decimal_to_binary = (hex) => {
    let charCode = parseInt(hex, 10).toString(2);
    return charCode.padStart(4, '0');
  }
  
  export let binary_to_hex = (binary) => {
    let result = "";
    for (let i = 0; i < binary.length; i += 4) {
      result += parseInt(binary.substr(i, 4), 2).toString(16);
    }
    return result;
  }
  
  /**
   * 二进制异或
   * @param x 二进制输入X
   * @param y 二进制输入Y
   * @returns {string}
   */
  let xor_bin = (x, y) => {
    let result = "";
    for (let i = 0; i < x.length; i++) {
      if (String(x).charAt(i) === String(y).charAt(i)) {
        result += "0";
      } else {
        result += "1";
      }
    }
    return result;
  }
  
  /**
   * 两位16进制进行异或
   * @param hexA 两位16进制字符串A
   * @param hexB 两位16进制字符串B
   * @returns {string}
   */
  export let xor_hex = (hexA, hexB) => {
    let result = "";
    // 先将16进制字符串转换成二进制
    let binaryA = to_4binary(hexA);
    let binaryB = to_4binary(hexB);
    // 对二进制进行异或
    result = xor_bin(binaryA, binaryB);
    // 将异或结果转成16进制
    return bin_to_hex(result).padStart(2, '0');
  }
  
  /**
   * 多位16进制进行异或计算
   * @param hexA
   * @param hexB
   * @returns {string}
   */
  export let xor_hex_fill = (hexA, hexB) => {
    let len = hexA.length > hexB.length ? hexA.length : hexB.length;
    let result = '';
    for (let i = 0; i < len; i += 2) {
      result += xor_hex(hexA.substr(i, 2), hexB.substr(i, 2));
    }
    return result;
  }
  