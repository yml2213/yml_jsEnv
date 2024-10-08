# -*- coding:UTF-8 -*-

import json
import execjs
from lxml import etree
import requests

host = 'https://sugh.szu.edu.cn'
headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "max-age=0",
    "priority": "u=0, i",
    "referer": "https://sugh.szu.edu.cn/Html/News/Main/102.html",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0"
}
cookies = {}
url = "https://sugh.szu.edu.cn/Html/News/Main/102.html"
response = requests.get(url, headers=headers, cookies=cookies)
ck = response.headers['set-cookie'].split(';')[0]
print(ck)
name = ck.split('=')[0]
val = ck.split('=')[1]
cookies[name] = val

html = etree.HTML(response.text)
content = html.xpath('/html/head/meta[2]')[0].attrib['content']
js_code = html.xpath('/html/head/script[2]')[0].text
ts_src = html.xpath('//script')[0].attrib['src']

response = requests.get(host + ts_src, headers=headers, cookies=cookies)
ts_code = response.text

with open('./code_动态参数.js', 'r', encoding='utf-8') as f:
    code = f.read()
code = code.replace('$$content$$', content)
code = code.replace("'$$js_code$$'", js_code)
code = code.replace("'$$ts_code$$'", ts_code)

ck = execjs.compile(code).call('get_cookie')
# print(ck)
ck = ck.split(';')[0]
name = ck.split('=')[0]
val = ck.split('=')[1]
print(len(val))
cookies[name] = val
print(cookies)
response = requests.get(url, headers=headers, cookies=cookies)
response.encoding = 'utf-8'
print(response.text)
print(response)
