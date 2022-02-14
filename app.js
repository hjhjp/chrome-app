const title = document.querySelector(".title");

function resize1() {
  title.style.color = "red";
}

window.addEventListener("resize", resize1);