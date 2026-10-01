"use strict";


const menuBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

nav.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);


const themeBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
}
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

/* ===== 3. Smooth scroll: đã có trong CSS (scroll-behavior).
        Thêm scroll-spy: tô sáng link menu theo section đang xem ===== */
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");

const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l =>
        l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id)
      );
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
sections.forEach(s => spy.observe(s));

/* ===== 4. Scroll reveal ===== */
const revealObs = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

/* ===== 5. Lọc / tìm kiếm dự án theo từ khóa và tag ===== */
const searchInput = document.getElementById("project-search");
const tagButtons = document.querySelectorAll("#tag-filters .tag");
const cards = document.querySelectorAll("#project-grid .card");
const noResult = document.getElementById("no-result");
let activeTag = "all";

function filterProjects() {
  const keyword = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    const tags = card.dataset.tags.split(" ");
    const matchKeyword = !keyword || text.includes(keyword) || tags.some(t => t.includes(keyword));
    const matchTag = activeTag === "all" || tags.includes(activeTag);
    const show = matchKeyword && matchTag;
    card.hidden = !show;
    if (show) visible++;
  });
  noResult.hidden = visible > 0;
}
searchInput.addEventListener("input", filterProjects);
tagButtons.forEach(btn =>
  btn.addEventListener("click", () => {
    tagButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeTag = btn.dataset.tag;
    filterProjects();
  })
);

/* ===== 6. Đếm ký tự trong ô nội dung ===== */
const message = document.getElementById("message");
const charCount = document.getElementById("char-count");
message.addEventListener("input", () => {
  charCount.textContent = message.value.length;
});

/* ===== 7. Validate form (nhiều điều kiện) ===== */
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

const rules = {
  name: v => {
    if (!v.trim()) return "Vui lòng nhập họ tên.";
    if (v.trim().length < 2) return "Họ tên tối thiểu 2 ký tự.";
    if (/\d/.test(v)) return "Họ tên không được chứa số.";
    return "";
  },
  email: v => {
    if (!v.trim()) return "Vui lòng nhập email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Email không đúng định dạng.";
    return "";
  },
  phone: v => {
    if (!v.trim()) return "Vui lòng nhập số điện thoại.";
    if (!/^(0|\+84)\d{9}$/.test(v.replace(/\s/g, ""))) return "Số điện thoại không hợp lệ (VD: 0912345678).";
    return "";
  },
  message: v => {
    if (!v.trim()) return "Vui lòng nhập nội dung.";
    if (v.trim().length < 10) return "Nội dung tối thiểu 10 ký tự.";
    return "";
  }
};

function validateField(input) {
  const msg = rules[input.name](input.value);
  const errorEl = input.parentElement.querySelector(".error");
  errorEl.textContent = msg;
  input.classList.toggle("invalid", Boolean(msg));
  return !msg;
}

form.querySelectorAll("input, textarea").forEach(input =>
  input.addEventListener("blur", () => validateField(input))
);

form.addEventListener("submit", e => {
  e.preventDefault();
  const fields = [...form.querySelectorAll("input, textarea")];
  const allValid = fields.map(validateField).every(Boolean); // validate hết, không dừng sớm
  if (allValid) {
    status.textContent = "Đã gửi thành công. Cảm ơn bạn!";
    form.reset();
    charCount.textContent = "0";
  } else {
    status.textContent = "Vui lòng kiểm tra lại các trường báo lỗi.";
    form.querySelector(".invalid")?.focus();
  }
});

/* ===== 8. Hiển thị năm hiện tại ở footer ===== */
document.getElementById("year").textContent = new Date().getFullYear();
