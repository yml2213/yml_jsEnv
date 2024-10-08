/*
cron "10 8-20 * * *" xxx.js, tag: xxx
-------------------  青龙-配置文件-复制区域  -------------------
# 网易易盾
export wyyd=" 备注 # cookie "

多账号用 换行 或 @ 分割
tg频道: https://t.me/yml2213_tg
*/

const CodeName = "网易易盾"
const env = "wyyd"
const fs = require("fs")
const yml = require("yml2213-tool");
const {get_cb_fp, get_body_data} = require("./code_带环境");
const request = require("request-promise-native");
let sendLog = []
const mode = 1  // 并发-2   顺序-1
const runMax = 3  // 最大并发数量
let envSplit = ["\n", "&", "@"]
const ckFile = `${env}.txt`
//====================================================================================================
const ck_ = '11'

//====================================================================================================

class User {
    constructor(str, id) {
        this.index = id
        this.ckFlog = true
        this.ck_ = str.split("#")
        this.remark = this.ck_[0]
        this.cookie = this.ck_[1]
        this.set_this()
    }

    set_this() {

        this.suss = 0
    }

    async userTask() {
        await this.get_ac_token()  //
        await this.get_pic()  //


        // await this.test()  //


        // await this.check()  //
        // console.log(get_body_data('asdfdfasdfadfs', 23));

    }

    async test() {

        for (let i = 0; i < 50; i++) {
            await this.get_ac_token()  //
            await this.get_pic()  //

        }

        console.log(`运行 50 次, 成功 ${this.suss} 次, 通过率: ${this.suss / 50 * 100} %`)
    }



    async get_pic() {
        try {
            let {cb, fp} = get_cb_fp();
            // console.log(cb, fp)
            const options = {
                method: 'get',
                url: `https://c.dun.163.com/api/v3/get`,
                params: {
                    'referer': "https://dun.163.com/trial/jigsaw",
                    'zoneId': "CN31",
                    'dt': this.dt,
                    'acToken': "9ca17ae2e6ffcda170e2e6eeb8b861a9b484d0e160f8b08ba2c15a879f9b82d2598cefbeb1b553ada9fbb0c92af0feaec3b92ab8bc9b92f863b0b48992c85e839b9ba2d55aa68d99a9f041a29485ccd94289a9ee9e",
                    'id': "07e2387ab53a4d6f930b8d9a9be71bdf",
                    'fp': fp,
                    'https': "true",
                    'type': "2",
                    'version': "2.28.0",
                    'dpr': "1.25",
                    'dev': "1",
                    'cb': cb,
                    'ipv6': "false",
                    'runEnv': "10",
                    'group': "",
                    'scene': "",
                    'lang': "zh-CN",
                    'sdkVersion': "",
                    'loadVersion': "2.5.0",
                    'iv': "4",
                    'user': "",
                    'width': "320",
                    'audio': "false",
                    'sizeType': "10",
                    'smsVersion': "v3",
                    'token': "1d40884cbecb48d2b4918252a6fda6b2",
                    'callback': "__JSONP_yx0plgd_12"
                },
                headers: {
                    'Accept': '*/*',
                    'Accept-Language': 'zh-CN,zh;q=0.9,fr;q=0.8,de;q=0.7,en;q=0.6',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive',
                    'Pragma': 'no-cache',
                    'Referer': 'https://dun.163.com/',
                    'Sec-Fetch-Dest': 'script',
                    'Sec-Fetch-Mode': 'no-cors',
                    'Sec-Fetch-Site': 'same-site',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
                    'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                }
            }
            // console.log(options)
            // console.log(`=========================`)
            let {res} = await yml.request(options)
            // console.log(res)
            res = res.split('(')[1].split(')')[0]
            try {
                res = JSON.parse(res)
            } catch (e) {
                console.log(e)
            }
            // console.log(res)
            // console.log(typeof res)
            if (res.error === 0) {
                this.bg = res.data.bg[0]
                this.front = res.data.front[0]
                this.token = res.data.token
                // console.log(this.bg, this.front, this.token)
                await this.saveImage(this.bg, "bg.jpg")
                await this.saveImage(this.front, "front.jpg")
                await this.ocr_pic(this.bg, this.front)

            } else {
                this.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    }


    async getBase64FromURL1(url) {
        const https = require('https');
        return new Promise((resolve, reject) => {
            https.get(url, (res) => {
                const chunks = [];
                res.on('data', (chunk) => {
                    chunks.push(chunk);
                });
                res.on('end', () => {
                    const buffer = Buffer.concat(chunks);
                    const base64 = buffer.toString('base64');
                    resolve(base64);
                });
                res.on('error', (error) => {
                    reject(error);
                });
            });
        });
    }

    async getBase64FromURL(url) {
        return new Promise((resolve, reject) => {
            const https = require('https');
            https.get(url, (res) => {
                let data = [];

                res.on('data', (chunk) => {
                    data.push(chunk);
                });

                res.on('end', () => {
                    const concatenatedData = new Uint8Array(data.reduce((totalLength, chunk) => {
                        return totalLength + chunk.length;
                    }, 0));

                    let offset = 0;
                    for (let i = 0; i < data.length; i++) {
                        concatenatedData.set(new Uint8Array(data[i]), offset);
                        offset += data[i].length;
                    }

                    // Convert Uint8Array to Base64 string without Buffer
                    const base64 = this.arrayBufferToBase64(concatenatedData);
                    resolve(base64);
                });

                res.on('error', (error) => {
                    reject(error);
                });
            });
        });
    }

    arrayBufferToBase64(buffer) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        let result = '', i, j, threeOctets, byte1, byte2, byte3;

        for (i = 0; i < buffer.length; i += 3) {
            threeOctets = (buffer[i] << 16) | (buffer[i + 1] << 8) | buffer[i + 2];
            for (j = 0; j < 4; j++) {
                if (i * 8 + j * 6 <= buffer.length * 8) {
                    switch (j) {
                        case 0:
                            byte1 = (threeOctets >>> 18) & 0x3F;
                            break;
                        case 1:
                            byte1 = (threeOctets >>> 12) & 0x3F;
                            break;
                        case 2:
                            byte1 = (threeOctets >>> 6) & 0x3F;
                            break;
                        case 3:
                            byte1 = threeOctets & 0x3F;
                            break;
                    }
                    result += chars[byte1];
                } else {
                    result += '=';
                }
            }
        }

        return result;
    }



    async ocr_pic(bg_url, front_url) {
        try {
            const targetBase64 = await this.getBase64FromURL(front_url);
            const backgroundBase64 = await this.getBase64FromURL(bg_url);
            const options = {
                method: 'post',
                url: `http://81.70.196.85:8000/slide_match`,
                form: {
                    "target": targetBase64,
                    "background": backgroundBase64,
                },
                json: true
            };
            let body = await request(options);  // 使用 await
            // console.log(body);  // 这里可以使用从 sendRequest 得到的 body
            if (body.code === 200) {
                this.x_num = body.data.target[0]
                console.log(`X===> ${this.x_num}`)
                await this.check()  //
            }
        } catch (error) {
            console.log(error);
        }
    }



    async get_ac_token() {
        try {
            const options = {
                method: 'get',
                url: `https://c.dun.163.com/api/v2/getconf`,
                params: {
                    'referer': "https://dun.163.com/trial/jigsaw",
                    'zoneId': "",
                    'id': "07e2387ab53a4d6f930b8d9a9be71bdf",
                    'ipv6': "false",
                    'runEnv': "10",
                    'iv': "4",
                    'type': "2",
                    'loadVersion': "2.5.0",
                    'callback': "__JSONP_efvo9cw_17"
                },
                headers: {
                    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                    'Accept-Language': "zh-CN,zh;q=0.9,fr;q=0.8,de;q=0.7,en;q=0.6",
                    'Cache-Control': "no-cache",
                    'Pragma': "no-cache",
                    'Referer': "https://dun.163.com/",
                    'Sec-Fetch-Dest': "script",
                    'Sec-Fetch-Mode': "no-cors",
                    'Sec-Fetch-Site': "same-site",
                    'sec-ch-ua': "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
                    'sec-ch-ua-mobile': "?0",
                    'sec-ch-ua-platform': "\"Windows\"",
                    // 'Cookie': "_ga=GA.1.2a13d78f094d2.4ad4872a240497976944; Hm_lvt_4671c5d502135636b837050ec6d716ce=1728311696; __root_domain_v=.163.com; _qddaz=QD.263128311696112; Hm_lpvt_4671c5d502135636b837050ec6d716ce=1728376966"
                }
            }
            // console.log(options)
            // console.log(`=========================`)
            let {res} = await yml.request(options)
            // console.log(res)
            res = res.split('(')[1].split(')')[0]
            try {
                res = JSON.parse(res)
            } catch (e) {
                console.log(e)
            }
            // console.log(res)
            if (res.error === 0) {
                this.dt = res.data.dt
                this.ac_token = res.data.ac.token
            } else {
                this.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    }


    async check() {
        try {
            let {cb, fp} = get_cb_fp();
            // console.log(cb, fp)
            let res_data = get_body_data(this.token, this.x_num);
            // console.log(res_data.data)

            const options = {
                method: 'get',
                url: `https://c.dun.163.com/api/v3/check`,
                params: {
                    'referer': "https://dun.163.com/trial/jigsaw",
                    'zoneId': "CN31",
                    'dt': this.dt,
                    'id': "07e2387ab53a4d6f930b8d9a9be71bdf",
                    'token': this.token,
                    'data': res_data.data,
                    'width': "320",
                    'type': "2",
                    'version': "2.28.0",
                    'cb': cb,
                    'user': "",
                    'extraData': "",
                    'bf': "0",
                    'runEnv': "10",
                    'sdkVersion': "",
                    'loadVersion': "2.5.0",
                    'iv': "4",
                    'callback': "__JSONP_efvo9cw_17"
                },
                headers: {
                    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                    'Accept-Language': "zh-CN,zh;q=0.9,fr;q=0.8,de;q=0.7,en;q=0.6",
                    'Cache-Control': "no-cache",
                    'Pragma': "no-cache",
                    'Referer': "https://dun.163.com/",
                    'Sec-Fetch-Dest': "script",
                    'Sec-Fetch-Mode': "no-cors",
                    'Sec-Fetch-Site': "same-site",
                    'sec-ch-ua': "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
                    'sec-ch-ua-mobile': "?0",
                    'sec-ch-ua-platform': "\"Windows\"",
                    // 'Cookie': "_ga=GA.1.2a13d78f094d2.4ad4872a240497976944; Hm_lvt_4671c5d502135636b837050ec6d716ce=1728311696; __root_domain_v=.163.com; _qddaz=QD.263128311696112; Hm_lpvt_4671c5d502135636b837050ec6d716ce=1728376966"
                }
            }
            // console.log(options)
            console.log(`=========================`)
            let {res} = await yml.request(options)
            // console.log(res)
            res = res.split('(')[1].split(')')[0]
            try {
                res = JSON.parse(res)
            } catch (e) {
                console.log(e)
            }
            // console.log(res)
            console.log(JSON.stringify(res))
            if (res.error === 0) {
                if (res.data.result) {
                    console.log("成功")
                    this.suss += 1
                } else {
                    console.log("失败")
                }

            } else {
                this.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    }








    async saveImage(url, filename) {
        const https = require('https');
        const fs = require('fs');
        const path = require('path');
        const fileLocation = path.join(__dirname, filename);
        // console.log(`尝试保存图片到：${fileLocation}`);
        return new Promise((resolve, reject) => {
            const file = fs.createWriteStream(fileLocation);
            https.get(url, response => {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    // console.log('图片已保存:' + filename + fileLocation);
                    // console.log(`${filename}, 图片已保存, 路径: ${fileLocation}`);
                    resolve();
                });
            }).on('error', error => {
                console.error('下载图片出错:', error);
                fs.unlink(fileLocation, unlinkError => {
                    if (unlinkError) {
                        console.error('删除文件出错:', unlinkError);
                    }
                    reject(error);
                });
            });
        });
    }


    log(message, pushCode = 0) {
        message = typeof message === "object" ? JSON.stringify(message) : message
        console.log(`${this.index}-${this.remark},  ${message}`)
        if (pushCode) {
            sendLog.push(`${this.index}-${this.remark} ${message}`)
        }
    }
}


class UserList {
    constructor(env) {
        this.env = env
        this.userList = []
        this.logPrefix = `\n[环境检测 ${this.env}]`
        this.mode = mode
    }

    checkEnv() {
        try {
            let UserData = ""
            if (ckFile !== "" && fs.existsSync(ckFile)) {
                UserData = UserData.concat(fs.readFileSync(`./${ckFile}`, "utf-8").split("\n") || [])
                console.log(`ck文件[ ${ckFile} ]加载成功`)
            } else {
                console.log(`ck文件[ ${ckFile} ]不存在, 调用青龙环境变量`)
                UserData = process.env[env] || ck_
            }
            if (!UserData || UserData.trim() === "") {
                console.log(`${this.logPrefix} 没有找到账号信息`)
                return false
            }
            envSplit = envSplit || ["\n", "&", "@"]
            this.userList = UserData
                .split(new RegExp(envSplit.join("|")))
                .filter((cookie) => cookie.trim() !== "")
                .map((cookie, index) => new User(cookie.trim(), `账号[${index + 1}]`))
            const userCount = this.userList.length
            console.log(`${this.logPrefix} ${userCount > 0 ? `找到 ${userCount} 个账号\n` : "没有找到账号\n"}`)
            return true

        } catch (e) {
            console.log(e)
        }
    }

    async runTask() {
        if (!this.checkEnv()) {
            return
        }
        console.log(`[任务 ${CodeName}] 开始运行`)
        if (this.mode === 2) {  // 并发
            const taskQueue = []
            const concurrency = runMax
            for (const user of this.userList) {
                while (taskQueue.length >= concurrency) {
                    await Promise.race(taskQueue)
                }
                const promise = user.userTask()
                taskQueue.push(promise)
                promise.finally(() => {
                    taskQueue.splice(taskQueue.indexOf(promise), 1)
                })
                if (taskQueue.length < concurrency) {
                    continue
                }
                await Promise.race(taskQueue)
            }
            await Promise.allSettled(taskQueue)
        } else {
            for (const user of this.userList) {
                await user.userTask()
            }
        }
    }
}

(async () => {
    require("dotenv").config()
    const s = Date.now()
    const userList = new UserList(env)
    await userList.runTask()
    const e = Date.now()
    await done(s, e)
})().catch(console.error)


async function done(s, e) {
    const el = (e - s) / 1000
    console.log(`\n[任务执行完毕 ${CodeName}] 耗时：${el.toFixed(2)}秒`)
    await showmsg()

    async function showmsg() {
        if (!sendLog) return
        if (!sendLog.length) return
        let notify = require('./sendNotify')
        console.log('\n============== 本次推送--by_yml ==============')
        await notify.sendNotify(CodeName, sendLog.join('\n'))
    }

    process.exit(0)
}



