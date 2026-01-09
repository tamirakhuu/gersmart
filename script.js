const mBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("mobileDrawer");
const drawerClose = document.getElementById("drawerClose");

if(mBtn && drawer){
  mBtn.onclick = ()=> drawer.classList.add("show");
}

if(drawerClose){
  drawerClose.onclick = ()=> drawer.classList.remove("show");
}

drawer.querySelectorAll("a").forEach(a=>{
  a.onclick = ()=> drawer.classList.remove("show");
});


const faders = document.querySelectorAll(".fade-in");
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
}, { threshold: .2 });
faders.forEach(el => obs.observe(el));

const counters = document.querySelectorAll(".counter");
let counterStarted = false;
function startCounters() {
  if (counterStarted) return;
  counterStarted = true;
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let current = 0;
    const step = Math.ceil(target / 120);
    function update() {
      current += step;
      if (current >= target) counter.innerText = target;
      else {
        counter.innerText = current;
        requestAnimationFrame(update);
      }
    }
    update();
  });
}

const texts = ["CALM AND COMFORTABLE", "УХААЛАГ ГЭР ТАЙВАН БАС ТУХТАЙ"];
let ti = 0;
const heroText = document.getElementById("heroSwap");
if (heroText) {
  setInterval(() => {
    heroText.style.opacity = 0;
    setTimeout(() => {
      ti = (ti + 1) % texts.length;
      heroText.textContent = texts[ti];
      heroText.style.opacity = 1;
    }, 800);
  }, 3500);
}

let rIndex = 0;
const reviews = document.querySelectorAll(".review");
if (reviews.length) {
  setInterval(() => {
    reviews[rIndex].classList.remove("active");
    rIndex = (rIndex + 1) % reviews.length;
    reviews[rIndex].classList.add("active");
  }, 4500);
}

const scrollBtn = document.getElementById("scrollTop");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 400);
  });
  scrollBtn.onclick = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });
}

const statsSection = document.querySelector(".stats");
if (statsSection) {
  new IntersectionObserver(e => e[0].isIntersecting && startCounters(), { threshold: .4 })
    .observe(statsSection);
}

window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  if (!splash) return;
  setTimeout(() => {
    splash.style.opacity = "0";
    splash.style.pointerEvents = "none";
    setTimeout(() => splash.remove(), 800);
  }, 1000);
});

const typeWord = "GerSmart";
const elType = document.getElementById("typeLogo");
let typeIndex = 0;
if (elType) {
  const interval = setInterval(() => {
    elType.textContent += typeWord[typeIndex++];
    if (typeIndex === typeWord.length) clearInterval(interval);
  }, 120);
}

const track = document.getElementById("partnerTrack");
const slides = document.querySelectorAll(".partner-slide");
const next = document.getElementById("pNext");
const prev = document.getElementById("pPrev");
let index = 0;

if (track && slides.length && next && prev) {
  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  next.onclick = () => { index = (index + 1) % slides.length; update(); };
  prev.onclick = () => { index = (index - 1 + slides.length) % slides.length; update(); };

  setInterval(() => {
    index = (index + 1) % slides.length;
    update();
  }, 3000);
}


document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
});




