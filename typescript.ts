"use strict";
/*menu*/
const menuBtn = document.getElementById(
  "menu-toggle",
) as HTMLButtonElement | null;
const nav = document.getElementById("nav") as HTMLElement | null;

menuBtn?.addEventListener("click", () => {
  if (nav && menuBtn) {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expand", String(open));
  }
});

nav?.querySelectorAll<HTMLAnchorElement>("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav?.classList.remove("open");
    menuBtn?.setAttribute("aria-expended", "false");
  }),
);
/*sang/toi*/
const themeBtn = document.getElementById(
  "theme-toggle",
) as HTMLButtonElement | null;
const root = document.documentElement;

function applyTheme(theme: string): void {
  root.setAttribute("data-theme", theme);
  if (themeBtn) {
    themeBtn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  }
}

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeBtn?.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});
