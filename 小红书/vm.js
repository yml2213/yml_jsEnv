var vm= require("vm2")
var fs = require('fs')
const {VM,VMScript} = vm
var myvm = new VM()

var code = fs.readFileSync('./enviroment.js')
code += fs.readFileSync('./code.js')
debugger;

function get_encrypt(){
    code += `;;;get_headers();;;`
    var res = myvm.run(code)
    console.log(res)
    return res
}
get_encrypt();
debugger;
