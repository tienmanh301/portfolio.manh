# Executive Portfolio & Online Resume — Nguyen Tien Manh

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

## 🚀 Hướng dẫn Triển khai & Sử dụng

### 1. Kiểm tra trên máy cục bộ (Local)
Mở tệp `index.html` trực tiếp bằng trình duyệt (Chrome, Edge, Firefox, Safari).

### 2. Đẩy lên GitHub & Triển khai tự động trên Vercel

```bash
git init
git add .
git commit -m "feat: complete executive portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
Sau đó Import vào Vercel để chạy trực tiếp.
