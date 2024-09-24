# import struct
#
# integers = [910181222, 1359286072, 1598043180, 1526888060]
# key_Bytes = b''.join(struct.pack(('>I', i) for i in integers))
# print(key_Bytes)

import struct

integers = [910181222, 1359286072, 1598043180, 1526888060]  # 示例整数列表

# 使用列表推导式和struct.pack()来转换每个整数为字节序列
key_Bytes = b''.join(struct.pack('>I', i) for i in integers)

print(key_Bytes)
