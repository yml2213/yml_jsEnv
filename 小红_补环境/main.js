const {VM,VMScript} = require("vm2");
const fs = require('fs');
const vm =new VM()

var code = fs.readFileSync('./env.js')
code += fs.readFileSync('./code.js')
function decode(){
    var res = vm.run(code)
    console.log(res)
    return res
}
decode()
