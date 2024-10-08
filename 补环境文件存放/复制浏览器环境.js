// 对于 location 和 navigator 可以使用下面的复制, 这里写要复制的对象，可复制本身以及最近2层原型链上的属性

let obj2copy = {}

function objectCopy(obj) {
    for (key in Object.getOwnPropertyDescriptors(obj)) {
        // console.log(key)
        if (Object.getOwnPropertyDescriptor(obj, key)['value'] && typeof (Object.getOwnPropertyDescriptor(obj, key)['value']) === 'string') {
            console.log(key, Object.getOwnPropertyDescriptor(obj, key)['value'])
            obj2copy[key] = Object.getOwnPropertyDescriptor(obj, key)['value']
        }
        if (Object.getOwnPropertyDescriptor(obj, key)['get']) {
            try {
                result = obj[key]
            } catch (e) {
                continue
            }
            if (['string', 'boolean', 'number'].indexOf(typeof result) !== -1) {
                console.log(key, result)
                obj2copy[key] = result
            }
            if (Object.prototype.toString.call(result) === '[object Array]') {
                console.log(key, result)
                obj2copy[key] = result
            }
        }
    }
    for (key in Object.getOwnPropertyDescriptors(obj.__proto__)) {
        // console.log(key)
        if (Object.getOwnPropertyDescriptor(obj.__proto__, key)['value'] && typeof (Object.getOwnPropertyDescriptor(obj.__proto__, key)['value']) === 'string') {
            console.log(key, Object.getOwnPropertyDescriptor(obj.__proto__, key)['value'])
            obj2copy[key] = Object.getOwnPropertyDescriptor(obj.__proto__, key)['value']
        }
        if (Object.getOwnPropertyDescriptor(obj.__proto__, key)['get']) {
            result = obj[key]
            if (['string', 'boolean', 'number'].indexOf(typeof result) !== -1) {
                console.log(key, result)
                obj2copy[key] = result
            }
            if (Object.prototype.toString.call(result) === '[object Array]') {
                console.log(key, result)
                obj2copy[key] = result
            }
        }
    }
    for (key in Object.getOwnPropertyDescriptors(obj.__proto__.__proto__)) {
        // console.log(key)
        if (Object.getOwnPropertyDescriptor(obj.__proto__.__proto__, key)['value'] && typeof (Object.getOwnPropertyDescriptor(obj.__proto__.__proto__, key)['value']) === 'string') {
            console.log(key, Object.getOwnPropertyDescriptor(obj.__proto__.__proto__, key)['value'])
            obj2copy[key] = Object.getOwnPropertyDescriptor(obj.__proto__.__proto__, key)['value']
        }
        if (Object.getOwnPropertyDescriptor(obj.__proto__.__proto__, key)['get']) {
            result = obj[key]
            if (['string', 'boolean', 'number'].indexOf(typeof result) !== -1) {
                console.log(key, result)
                obj2copy[key] = result
            }
            if (Object.prototype.toString.call(result) === '[object Array]') {
                console.log(key, result)
                obj2copy[key] = result
            }
        }
    }
}

objectCopy(navigator) //这里写要复制的对象，可复制本身以及最近2层原型链上的属性
copy(obj2copy)