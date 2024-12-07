AOS.init();

document.querySelectorAll(".skill-circle").forEach((circle) => {
  const percent = circle.getAttribute("data-percent");
  const svgCircle = circle.querySelector("circle:last-child");
  svgCircle.style.setProperty("--percent", percent);
});
