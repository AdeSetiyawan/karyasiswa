function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-per");

  skillBars.forEach(function (bar) {
    if (isInViewport(bar)) {
      const skillValue = bar.getAttribute("data-skill");
      let currentWidth = parseFloat(bar.style.width) || 0;
      let targetWidth = parseFloat(skillValue);

      if (currentWidth < targetWidth) {
        currentWidth += (targetWidth - currentWidth) * 0.05;
        bar.style.width = currentWidth + "%";
        bar.style.opacity = 1;
      }
    }
  });

  requestAnimationFrame(animateSkillBars);
}
window.addEventListener("scroll", animateSkillBars);

