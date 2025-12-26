// Start Menu Action
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = ("0px")
function toggleMenu() {
  if (menuList.style.maxHeight == ("0px")) {
    menuList.style.maxHeight = ("300px")
  } else {
    menuList.style.maxHeight = ("0px")
  }
}
// End Menu Action
// Start Scroll Animation
const sections = document.querySelectorAll('.section-animation');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});
// scroll bar
let el = document.querySelector(".scrollbar");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});

// end scroll bar


// ========== modal ==========
const modal = document.getElementById("choiceModal");

  function openModal() {
    modal.style.display = "flex";
  }

  document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
// ========== go back ==========
  function goBack() {
    if (document.referrer !== "") {
      window.history.back();
    } else {
      window.location.href = "index.html";
    }
  }
