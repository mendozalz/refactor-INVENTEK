let body = document.querySelector("body");
let mouse = document.getElementById("effectMouse");
body.addEventListener("mousemove", (e) => {
  console.log(e);
  let scale = 1;
  if (e.target.classList.contains("effect")) {
    scale = 3;
  }
  mouse.style.transform = `
        translateX(${e.clientX}px)
        translateY(${e.clientY}px)
        scale(${scale})
    `;
});
