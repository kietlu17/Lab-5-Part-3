
# Lab 5 - CRUD MVC & Authentication

Ứng dụng Node.js MVC quản lý sản phẩm và nhà cung cấp, có xác thực người dùng bằng session & cookie, giao diện EJS, kết nối MongoDB.

## Chức năng chính
- Đăng ký, đăng nhập, quên mật khẩu, đăng xuất cho người dùng
- Quản trị sản phẩm và nhà cung cấp (CRUD)
- Chỉ người dùng đã đăng nhập mới thao tác CRUD
- Tìm kiếm sản phẩm theo tên (hỗ trợ tiếng Việt có dấu)
- Lọc sản phẩm theo nhà cung cấp
- Giao diện EJS + Bootstrap
- Swagger UI cho API docs (`/api-docs`)

## Cài đặt
1. Clone repo:
   ```bash
   git clone <repo-url>
   cd lab5_part3
   ```
2. Cài đặt package:
   ```bash
   npm install
   ```
3. (Nếu dùng Swagger) cài thêm:
   ```bash
   npm install swagger-ui-express yamljs
   ```

## Sử dụng
1. Khởi động MongoDB (local hoặc Atlas)
2. Chạy app:
   ```bash
   npm start
   ```
3. Truy cập trình duyệt:
   - Trang chủ: [http://localhost:3000](http://localhost:3000)
   - Swagger docs: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Cấu trúc thư mục

```
app.js
package.json
swagger.yaml
config/
controllers/
database/
middleware/
models/
routes/
views/
```

## Ghi chú
- Để sử dụng chức năng CRUD, cần đăng nhập.
- Tìm kiếm sản phẩm dùng query: `/products?search=ten_san_pham`
- Lọc theo nhà cung cấp: `/products?supplier=id_nha_cung_cap`
- Đăng xuất: `/users/logout`

## Tác giả
Lab 5 - Hệ thống thông tin


