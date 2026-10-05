/**
 * ===================================================================
 * MAIN JAVASCRIPT LOGIC
 * Author: Nguyen Tien Manh Portfolio
 * ===================================================================
 */

// Global Resume Data for JSON Viewer
const resumeStructuredData = {
  "basics": {
    "name": "Nguyen Tien Manh",
    "vietnameseName": "Nguyễn Tiến Mạnh",
    "title": "Competitive Programmer & FinTech / Data Science Student",
    "avatar": "assets/images/avatar.jpg",
    "location": {
      "city": "Ha Noi",
      "country": "Vietnam",
      "address": "Ha Noi, Vietnam"
    },
    "phone": "0964564955",
    "email": "k64.2513310134@ftu.edu.vn",
    "github": "https://github.com/tienmanh301",
    "summary": "Sinh viên ngành Tài chính - Ngân hàng (K64) tại Đại học Ngoại thương Hà Nội với nền tảng tư duy thuật toán và lập trình thi đấu (Competitive Programming) vững chắc (C++, Python). Đam mê ứng dụng Khoa học Dữ liệu, Trí tuệ Nhân tạo (AI) và Công nghệ Tài chính (FinTech)."
  },
  "education": [
    {
      "institution": "Foreign Trade University, Ha Noi (FTU)",
      "degree": "Bachelor's Degree (Cử nhân)",
      "major": "Finance and Banking (Tài chính - Ngân hàng, Khóa K64)",
      "startDate": "2026",
      "endDate": "Present",
      "coursework": [
        "Programming for Data Analysis and Scientific Computing",
        "Financial Technology (FinTech)",
        "The Application of Machine Learning to Financial Analysis"
      ]
    },
    {
      "institution": "Dien Chau 4 High School, Nghe An",
      "degree": "High School Diploma",
      "major": "Natural Sciences Specialized Class (Lớp Chuyên Tự Nhiên)",
      "startDate": "2022",
      "endDate": "2025"
    }
  ],
  "workExperience": [
    {
      "organization": "High School Gifted IT Team (Đội tuyển HSG Tin học)",
      "role": "Competitive Programming Technical Assistant & Problem Setter",
      "period": "2024",
      "highlights": [
        "Cấu hình và vận hành hệ thống chấm điểm tự động Themis để tổ chức kiểm tra các bộ bài tập Cấu trúc dữ liệu và Giải thuật cho đội tuyển tỉnh.",
        "Thiết kế, kiểm thử và stress-test các bộ testcase chuyên sâu bao quát các trường hợp biên (edge cases) và kiểm soát độ phức tạp Thời gian & Không gian (O(N log N), O(N)).",
        "Phân tích, gỡ lỗi (debug) bài nộp của học sinh, phản hồi chuyên sâu về tối ưu trạng thái Quy hoạch động, duyệt đồ thị và cấu trúc dữ liệu nâng cao (Segment Tree, Fenwick Tree)."
      ],
      "technologies": ["C++", "Themis Evaluation System", "Segment Tree", "Fenwick Tree", "Graph Algorithms"]
    },
    {
      "organization": "Online Judge Platforms (VNOI, LQDOJ, LCOJ)",
      "role": "Algorithm Practice & Problem Solving",
      "period": "2024",
      "highlights": [
        "Giải và tối ưu hóa hơn 100 bài toán giải thuật nâng cao trên các nền tảng VNOI, LQDOJ, LCOJ.",
        "Chuyên sâu về Dynamic Programming, Graph Theory, Number Theory và String Hashing.",
        "Nghiên cứu contest editorial và tái cấu trúc mã nguồn tối ưu nhằm loại bỏ hoàn toàn các lỗi TLE và MLE."
      ],
      "technologies": ["C++", "Python", "VNOI", "LQDOJ", "Dynamic Programming"]
    }
  ],
  "skills": {
    "programmingLanguages": ["C++", "Python", "C", "Pascal", "SQL", "HTML5/CSS3"],
    "algorithmsAndDataStructures": ["Dynamic Programming", "Graph Theory", "Segment Tree", "Fenwick Tree (BIT)", "Disjoint Set Union (DSU)", "String Hashing", "Number Theory"],
    "toolsAndEnvironments": ["Themis", "Visual Studio Code", "Online Judge", "Git & GitHub"],
    "productivityAndAi": ["AI-Assisted Software Development", "Microsoft Excel", "Word", "PowerPoint"]
  },
  "achievements": [
    {
      "title": "Giải Ba Học sinh giỏi cấp Tỉnh môn Tin học, Tỉnh Nghệ An",
      "year": "2024"
    },
    {
      "title": "Hoàn thành giải & tối ưu 100+ bài toán giải thuật nâng cao (VNOI/LQDOJ/LCOJ)",
      "year": "2024"
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40
    });
  }

  // 2. Dark / Light Mode Toggle with Persistence
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  
  // Check localStorage or System Preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    enableLightMode();
  } else {
    enableDarkMode();
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        enableLightMode();
        localStorage.setItem('theme', 'light');
      } else {
        enableDarkMode();
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  function enableDarkMode() {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    if (themeIcon) {
      themeIcon.className = 'fa-solid fa-moon text-xs';
    }
  }

  function enableLightMode() {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    if (themeIcon) {
      themeIcon.className = 'fa-solid fa-sun text-xs text-amber-500';
    }
  }

  // 3. ScrollSpy Navigation Highlighting
  const navLinks = document.querySelectorAll('header nav a');
  const sections = document.querySelectorAll('main section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-blue-400', 'font-bold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-blue-400', 'font-bold');
      }
    });
  });

  // 4. Toast Notification
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');

  window.showToast = function(msg) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('flex');
    setTimeout(() => {
      toast.classList.add('hidden');
      toast.classList.remove('flex');
    }, 2200);
  };

  // 5. Global Copy to Clipboard Helper
  window.copyText = function(text, successMsg) {
    navigator.clipboard.writeText(text).then(() => {
      window.showToast(successMsg || 'Đã sao chép vào bộ nhớ tạm!');
    }).catch(() => {
      window.showToast('Không thể sao chép, vui lòng thử lại!');
    });
  };

  // 6. JSON Modal Viewer Logic
  const viewJsonBtn = document.getElementById('viewJsonBtn');
  const jsonModal = document.getElementById('jsonModal');
  const closeJsonModalBtn = document.getElementById('closeJsonModalBtn');
  const copyJsonModalBtn = document.getElementById('copyJsonModalBtn');
  const jsonCodeBlock = document.getElementById('jsonCodeBlock');

  if (viewJsonBtn && jsonModal && jsonCodeBlock) {
    viewJsonBtn.addEventListener('click', () => {
      jsonCodeBlock.textContent = JSON.stringify(resumeStructuredData, null, 2);
      jsonModal.classList.remove('hidden');
      jsonModal.classList.add('flex');
    });
  }

  if (closeJsonModalBtn && jsonModal) {
    closeJsonModalBtn.addEventListener('click', () => {
      jsonModal.classList.add('hidden');
      jsonModal.classList.remove('flex');
    });
  }

  if (jsonModal) {
    jsonModal.addEventListener('click', (e) => {
      if (e.target === jsonModal) {
        jsonModal.classList.add('hidden');
        jsonModal.classList.remove('flex');
      }
    });
  }

  if (copyJsonModalBtn) {
    copyJsonModalBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(JSON.stringify(resumeStructuredData, null, 2)).then(() => {
        window.showToast('Đã sao chép toàn bộ JSON vào clipboard!');
      });
    });
  }

  // 7. Simulated Contact Form Handler
  const contactForm = document.getElementById('quickContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const origText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin text-xs"></i> <span>Đang gửi...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fa-solid fa-check text-xs"></i> <span>Đã gửi thành công!</span>';
        submitBtn.classList.remove('bg-blue-600', 'hover:bg-blue-500');
        submitBtn.classList.add('bg-emerald-600');
        contactForm.reset();
        window.showToast('Cảm ơn bạn! Lời nhắn đã được ghi nhận.');

        setTimeout(() => {
          submitBtn.innerHTML = origText;
          submitBtn.classList.remove('bg-emerald-600');
          submitBtn.classList.add('bg-blue-600', 'hover:bg-blue-500');
          submitBtn.disabled = false;
        }, 3000);
      }, 1000);
    });
  }
});
