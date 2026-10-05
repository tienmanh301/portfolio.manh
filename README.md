# Executive Portfolio & Online Resume — Nguyen Tien Manh

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/Status-Active-emerald.svg)

Trang web Portfolio cá nhân đa tệp (Multi-file Project) hiện đại, chuyên nghiệp dành cho lập trình viên thi đấu (Competitive Programmer) và sinh viên ngành Tài chính - Ngân hàng (FTU K64). Dự án được tối ưu hóa hoàn toàn để triển khai tức thì trên **Vercel** hoặc **GitHub Pages**.

---

## 📁 Cấu trúc thư mục chuẩn (Vercel Ready)

```text
├── index.html          # Trang chủ chính (BẮT BUỘC nằm ở thư mục gốc)
├── assets/
│   ├── css/
│   │   └── style.css   # Tùy chỉnh hiệu ứng, animation, custom scrollbar
│   ├── js/
│   │   ├── main.js     # Xử lý cuộn trang, dark mode, AOS, copy clipboard, JSON modal
│   │   └── music.js    # Trình phát nhạc chill Lofi (Play/Pause, Floating Player)
│   └── images/
│       └── avatar.jpg  # Ảnh đại diện cá nhân
├── resume_data.json    # Dữ liệu trích xuất cấu trúc chuẩn JSON
└── README.md           # Hướng dẫn dự án bằng Markdown
```

---

## ✨ Tính năng nổi bật

1. **Thiết kế Chuẩn Doanh nghiệp (Executive / Minimalist)**:
   - Tông màu trầm trung tính Deep Navy (`#090d16`), Slate (`#1e293b`), Corporate Blue (`#1d4ed8`) và Sky Blue (`#0284c7`).
   - Phông chữ tiêu chuẩn sắc nét: **Inter**, **Plus Jakarta Sans** và **JetBrains Mono**.
2. **Hiệu ứng chuyển động & Tương tác**:
   - Tích hợp **AOS (Animate On Scroll)** cho hiệu ứng xuất hiện cuộn trang mượt mà.
   - Hiệu ứng **Glassmorphism** mờ nền kính cho Header navigation và các thẻ nội dung.
   - Nút bật/tắt **Dark Mode / Light Mode** lưu trạng thái qua `localStorage`.
   - Tính năng **1-Click Copy** cho Số điện thoại, Email và Địa chỉ kèm thông báo Toast.
3. **Trình phát nhạc Chill nổi (Floating Lofi Player)**:
   - Tích hợp đĩa nhạc Vinyl xoay tròn và cột sóng âm (Soundwave Equalizer) nhấp nháy khi phát nhạc.
   - Nhúng stream audio Lofi bản quyền mở chất lượng cao.
   - Mặc định ở trạng thái Tạm dừng (Pause) để tôn trọng trải nghiệm người dùng.
4. **Trình xem & Trích xuất Dữ liệu JSON**:
   - Modal xem toàn bộ cấu trúc dữ liệu JSON Resume ngay trên giao diện web.

---

## 🚀 Hướng dẫn Triển khai & Sử dụng

### 1. Kiểm tra trên máy cục bộ (Local)
Mở tệp `index.html` trực tiếp bằng trình duyệt (Chrome, Edge, Firefox, Safari) hoặc sử dụng tiện ích **Live Server** trong VS Code.

### 2. Tùy chỉnh nhạc & ảnh đại diện
- **Đổi bài nhạc**: Mở tệp `assets/js/music.js` và thay thế URL tại biến `audioSource` bằng đường dẫn tệp MP3 bạn mong muốn.
- **Đổi ảnh đại diện**: Đặt ảnh chân dung của bạn vào `assets/images/avatar.jpg`.

### 3. Đẩy lên GitHub & Triển khai tự động trên Vercel

Mở Terminal tại thư mục dự án và chạy các lệnh:

```bash
git init
git add .
git commit -m "feat: complete executive portfolio with lofi player and AOS"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

Sau đó:
1. Đăng nhập vào [Vercel](https://vercel.com/).
2. Chọn **"Add New Project"** và Import kho lưu trữ GitHub vừa tạo.
3. Nhấn **"Deploy"** (Cấu trúc file `index.html` ở thư mục gốc giúp Vercel nhận diện ngay lập tức mà không cần cấu hình phức tạp, tránh lỗi `404 NOT_FOUND`).

---

## 👨‍💻 Thông tin tác giả

- **Họ và tên:** Nguyễn Tiến Mạnh
- **Đơn vị:** Đại học Ngoại thương Hà Nội (FTU K64) — Tài chính & Ngân hàng
- **GitHub:** [@tienmanh301](https://github.com/tienmanh301)
- **Email:** [k64.2513310134@ftu.edu.vn](mailto:k64.2513310134@ftu.edu.vn)
- **Điện thoại:** 0964564955
