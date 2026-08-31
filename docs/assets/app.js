const nav = document.querySelector(".nav");
const btn = document.querySelector(".menu-btn");
btn?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav a.item").forEach((a) => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

const links = [...document.querySelectorAll(".nav a.item")];
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const io = new IntersectionObserver(
  (entries) => {
    const vis = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!vis) return;
    links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${vis.target.id}`));
  },
  { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.3] }
);

sections.forEach((s) => io.observe(s));
