var fs = require('fs')

var code = fs.readFileSync('./env.js')
code += fs.readFileSync('./code.js')
// debugger;

function get_encrypt(){
    // code += `;;;get_headers();;;`
    // var res = myvm.run(code)
    var res = eval(code)
    console.log(res)
    return res
}
get_encrypt();
// debugger;
