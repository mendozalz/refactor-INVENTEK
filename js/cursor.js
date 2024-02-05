let body = document.querySelector("body");
let mouse = document.getElementById("effectMouse");
body.addEventListener("mousemove", (e) => {
  let scale = 1;
  let backgroundColor = "";
  if (e.target.classList.contains("effect")) {
    scale = 3;
    backgroundColor = "#02d9f9";
  }
  mouse.style.transform = `
        translateX(${e.clientX}px)
        translateY(${e.clientY}px)
        scale(${scale})
    `;
  mouse.style.backgroundColor = backgroundColor;
});
