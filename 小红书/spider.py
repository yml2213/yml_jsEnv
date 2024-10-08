import json
import execjs
import requests

cookies = {
    'a1': '18d40069d4fa8j0x8fqaddxl85ic2h97a2bchdy7i50000356250',
    'web_session': '030037a2817ab4019ea28c68ca224accd515e7',
}

headers = {
    'content-type': 'application/json;charset=UTF-8',
    # 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'x-s': 'XYW_eyJzaWduU3ZuIjoiNTEiLCJzaWduVHlwZSI6IngxIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6IjRlMWU4NTgyZTc4ZTg1NGI5OWY0NjNkNDA4ZGQzZjRiMWI4YmY0Y2JlNzg5NGYzYjQ5MWY0YTk5ZDQ2MWYxNTRmN2YwNmUyMDlmYjk1OTUxNDRhNTNiNzkzZDM2YjBmNWM5ZTNiZmRhMWZhYTFlYjkwZDc0YWEzMWI1NGM3MmNkMGQ3NGFhMzFiNTRjNzJjZGFjNDg5YjlkYThjZTVlNDhmNGFmYjlhY2ZjM2VhMjZmZTBiMjY2YTZiNGNjM2NiNTYyOTM5NTkxOTRiNmFjNzNkYjQ3NGFmNWI2MDkxMzhhMjUyNjk1MjA3ZDczNzAwNGE1MWNiNjg5MjdjZTU0NzBhZmU5ZmM4NTcyMzZmNjZlODNjZDc3ZWFiOGUwNjI3OGU0ODI2OTM0OWI3N2VhODYwMTZhZWE1ZTA0NjFmNzNhOWQzMGU1YmMzZGFlNjI0ZTlkZTJmNWIyYTBlNmJmNzZlODE4MGYzZDY3MTBjYzY1MDQxMTcwOTg1YTJiZjI5NyJ9',
}

json_data = {
    'cursor_score': '',
    'num': 31,
    'refresh_type': 1,
    'note_index': 24,
    'unread_begin_note_id': '',
    'unread_end_note_id': '',
    'unread_note_count': 0,
    'category': 'homefeed.career_v3',
    'search_key': '',
    'need_num': 6,
    'image_formats': [
        'jpg',
        'webp',
        'avif',
    ],
}

with open('./main.js','r',encoding='utf-8') as fp:
    jscode = fp.read()
    result = execjs.compile(jscode).call('get_encrypt')
    print(result)
    headers['x-s'] = result
    data = json.dumps(json_data,separators=(',',':'))
    response = requests.post('https://edith.xiaohongshu.com/api/sns/web/v1/homefeed', cookies=cookies, headers=headers, data=data)
    print(response.text)