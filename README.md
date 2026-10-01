# Bài thực hành 01: Trang web giới thiệu bản thân

Trang web cá nhân giới thiệu bản thân, xây dựng bằng HTML, CSS và JavaScript thuần (không dùng framework hay thư viện ngoài). Giao diện theo chủ đề **biển cả** với tone màu lạnh.

## Thông tin sinh viên

| | |
|---|---|
| **Họ và tên** | Nguyễn Minh Hoàng |
| **Mã sinh viên** | B25DCCC072 |
| **Trường** | Học viện Công nghệ Bưu chính Viễn thông, cơ sở Hoàng Quốc Việt, Hà Nội |
| **Ngành** | Công nghệ thông tin định hướng ứng dụng |
| **Môn học** | Bài thực hành 01 |

## Nội dung trang web

- **Header / menu:** logo, menu hamburger (bấm biểu tượng ☰ để mở các liên kết), nút đổi giao diện sáng/tối.
- **Giới thiệu:** thông tin cá nhân và nơi học tập.
- **Kỹ năng:** SQL, Python, HTML, CSS, JavaScript.
- **Dự án:** 3 dự án (Todo_APP, Cinema_website, Web bán hàng), có ô tìm kiếm và bộ lọc theo tag và từ khóa.
- **Liên hệ:** form liên hệ có kiểm tra dữ liệu nhập.
- **Footer:** thông tin bản quyền, năm hiện tại tự cập nhật.

## Công nghệ sử dụng

| Công nghệ | Vai trò |
|---|---|
| **HTML5** | Cấu trúc trang bằng các thẻ ngữ nghĩa (`header`, `nav`, `main`, `section`, `article`, `footer`) |
| **CSS3** | Bố cục bằng Flexbox và Grid, biến CSS, hiệu ứng hover, hoạt ảnh, responsive |
| **JavaScript** | Các tính năng tương tác (xem bên dưới) |
| **Google Fonts** | Font Fraunces (tiêu đề) và Nunito Sans (nội dung) |

## Tính năng nổi bật

### CSS
- **Flexbox** cho header, danh sách kỹ năng, nhóm tag. **Grid** cho lưới dự án và form.
- **Hiệu ứng hover** ở nút, thẻ dự án, kỹ năng, liên kết menu.
- **Responsive** với 2 breakpoint: tablet (`max-width: 900px`) và mobile (`max-width: 600px`).
- **Sóng biển chuyển động** ở đầu trang, vẽ bằng SVG và hoạt ảnh CSS.
- **Chế độ sáng/tối** dùng biến CSS, chỉ cần đổi một thuộc tính là đổi toàn bộ màu.
- Tôn trọng tùy chọn **giảm chuyển động** (`prefers-reduced-motion`) của hệ điều hành.

### JavaScript
1. **Menu hamburger:** bật/tắt menu bằng cách thêm hoặc bỏ class `open`.
2. **Dark / Light mode:** đổi giao diện, ghi nhớ lựa chọn bằng `localStorage` và mặc định theo cài đặt hệ điều hành.
3. **Smooth scroll và scroll-spy:** cuộn mượt khi bấm link menu, tô sáng mục đang xem bằng `IntersectionObserver`.
4. **Scroll reveal:** các mục hiện dần khi cuộn tới.
5. **Lọc / tìm kiếm dự án:** theo từ khóa và theo tag, có thông báo khi không có kết quả.
6. **Đếm ký tự:** hiển thị số ký tự đã nhập trong ô nội dung (tối đa 300).
7. **Validate form:** kiểm tra nhiều điều kiện cho họ tên, email, số điện thoại, nội dung; báo lỗi ngay dưới từng ô.
8. **Năm hiện tại ở footer:** tự cập nhật bằng `new Date().getFullYear()`.

> Lưu ý: form liên hệ chỉ **mô phỏng việc gửi** (chưa có máy chủ nhận dữ liệu), nên dữ liệu nhập không được lưu hay gửi đi đâu.

## Cấu trúc thư mục

```
<mã sinh viên> - BaiTH01/
├── index.html    # Cấu trúc và nội dung trang
├── style.css     # Giao diện, bố cục, hiệu ứng
├── script.js     # Các tính năng tương tác
└── README.md     # Tài liệu mô tả bài
```

Nếu có thêm ảnh, đặt trong thư mục `images/` cạnh `index.html`.

## Cách chạy

1. Tải hoặc clone repository về máy:
   ```bash
   git clone <đường-dẫn-repository>
   ```
2. Mở file `index.html` bằng trình duyệt (bấm đúp, hoặc dùng extension **Live Server** trong VS Code).
3. Không cần cài đặt hay build thêm gì.

Kết nối Internet chỉ cần để tải font từ Google Fonts. Nếu không có mạng, trang vẫn hoạt động bình thường với font dự phòng.

## Hướng dẫn nhanh khi chỉnh sửa

| Muốn đổi | Sửa ở đâu |
|---|---|
| Nội dung giới thiệu, kỹ năng, dự án | `index.html` |
| Màu sắc toàn trang | Khối `:root` đầu file `style.css` |
| Nội dung báo lỗi của form | Đối tượng `rules` trong `script.js` |
| Thêm dự án mới | Thêm thẻ `<article class="card" data-tags="...">` trong `index.html` |

## Tác giả

**Nguyễn Minh Hoàng**, sinh viên Học viện Công nghệ Bưu chính Viễn thông.
