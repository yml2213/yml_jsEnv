const {VM,VMScript} = require("vm2");
const fs = require('fs');
const vm =new VM()

var code = fs.readFileSync('./env.js')
code += fs.readFileSync('./code.js')
debugger;
function decode(){
    // code+=`;;;;`
    var res = vm.run(code)
    console.log(res)
    return res
}
decode()
debugger;