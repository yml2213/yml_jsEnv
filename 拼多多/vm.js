var vm= require("vm2")
var fs = require('fs')
const {VM,VMScript} = vm
var myvm = new VM()

var code = fs.readFileSync('./env.js')
code += fs.readFileSync('./code.js')
debugger;

function get_encrypt(){
    code += `;;;get_anti_content();;;`
    var res = myvm.run(code)
    console.log(res)
    return res
}
// get_encrypt();
debugger;
