import "../less/main.less";

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");

      if (href && href !== "#") {
        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });

  const boxes = document.querySelectorAll(".mision-vision .box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  boxes.forEach((box) => observer.observe(box));
});

function moveCarousel(direction) {
  const carousel = document.getElementById("carousel");

  if (!carousel) return;

  const scrollAmount = 320;

  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

window.moveCarousel = moveCarousel;