const fs = require('fs');
const path = require('path');

// 使用 path.join 来构建正确的文件路径
var code = fs.readFileSync(path.join(__dirname, 'env.js'));
code += fs.readFileSync(path.join(__dirname, 'code.js'));

function get_date(){
    var res = eval(code);
    console.log(res);
    return res;
}

// get_date();
module.exports = get_date();
