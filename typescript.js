"use strict";
const menuBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
menuBtn?.addEventListener("click", () => {
    if (nav && menuBtn) {
        const open = nav.classList.toggle("open");
        menuBtn.setAttribute("aria-expand", String(open));
    }
});
nav?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    nav?.classList.remove("open");
    menuBtn?.setAttribute("aria-expended", "false");
}));
