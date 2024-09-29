import json
import execjs
import requests

cookies = {
    'a1': '18d40069d4fa8j0x8fqaddxl85ic2h97a2bchdy7i50000356250',
    'web_session': '030037a2817ab4019ea28c68ca224accd515e7',
}
headers = {  # 定义请求头字典
    'Accept': 'application/json, text/javascript',  # 接受的数据类型
    'Origin': 'https://www.pinduoduo.com/',  # 请求来源
    'Referer': 'https://www.pinduoduo.com/'  # 引用页面的URL
}

params = {  # 定义查询参数字典
    'tfd_id': 'TFRQ0v00000Y_14283',  # 商品ID或相关标识符
    'page': '1',  # 页码
    'size': '100'  # 每页大小
}

with open('./vm.js', 'r', encoding='utf-8') as fp:  # 以只读方式打开本地文件'/vm.js'
    jscode = fp.read()  # 读取文件中的JavaScript代码

anti_content = execjs.compile(jscode).call('get_encrypt')  # 使用execjs编译并运行JavaScript代码以获取加密内容

print(anti_content)  # 打印加密内容

# params['anti_content'] = anti_content  # 将加密内容添加到查询参数中
params['anti_content'] = "0asAfqnF0jQ8j9dV1jP_Pqcd4dMu2AHTkGRhoent9pPvy84_zGVTHDPUMZOtjZrBcOKn-lz_KqP7i4jBxn4ZTnuBpo8WN49TAJz9ej7wyAoJFmL3jTH6suiJjVzZ4qGyNR5B0t6d4Ygf6Poz4-VxFtwXKigC1Rsu6RAOG03BheV5jAR-QKWdcK1c1leQyjaAFBYv356ZNa9sYYONKHzdNozG5AlZSxmlj5RAjCiJs9V-lckTyDInM1PIo1fH5cj10_TPMOt64NQfcL6Dyi8TEHY-eauOyc4I_jICCwIeRd_DfB4KTvF_e28TBFCuTWF_nygHp5MR9arwqTpnvC7P9tjKyQH8nC4-9TEL6CzOgJTNmODO_CH8bGydh0gScOfREOOk3XbYtnYux2fSFjU-yvORVdnY2BkVIA05eoXxS_qOlDfjehpjxZWRQroL3y9iShVKNKalBMJlUbi-m_zj8YRblbInJhJurZhuY8rkjCUQThuklpI4YXjJmf58X56ldo6DmXx8ZjVpqRLKYp0lUvmg1Fl5ptUSxEQJlZtS8HjBDWiOM4yXZ17Z"  # 将加密内容添加到查询参数中

response = requests.get('https://apiv2.pinduoduo.com/api/gindex/tf/query_tf_goods_info', params=params, headers=headers)  # 发起GET请求到指定API地址，传递参数和请求头

print(response.text)  # 打印响应文本