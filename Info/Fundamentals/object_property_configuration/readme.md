object ngoài giá trị còn có 3 attribute đặc biệt gọi là ' Flags '

1. wriable: true => value can change, nếu ko read-only

2. enumerable: true => sau đó đc liệt kê trong các vòng lặp, nếu ko thì ko đc liệt kê

3. configurable: true => thuộc tính có thể đc xóa, thay đổi

Mặc định: all true. but can change it.

Object.getOwnPropertyDescriptor
=> truy vấn đầy đủ thông tin về một thuộc tính
