
const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const hoverSign = document.querySelector(".hover-sign")

const videoList = [video1, video2, video3];

videoList.forEach(function(video) {
  video.addEventListener("mouseover", function() {
    video.play();
    hoverSign.classList.add("active")
  })
  video.addEventListener("mouseout", function() {
    video.pause()
    hoverSign.classList.remove("active")
  })
})

/* Animação */

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // Remover para efeito reversível
      }
    });
  }, { threshold: 0.2 });

  elements.forEach((el) => observer.observe(el));
});

/* Fade In Right*/

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in, .fade-in-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  fadeElements.forEach((el) => observer.observe(el));
});
