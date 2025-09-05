const top = document.getElementById("top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
});

top.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});