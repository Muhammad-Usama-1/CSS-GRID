const mainGrid = document.querySelector(".outer-grid");
const nav = document.querySelector("nav");

const toogle = () => {
  mainGrid.classList.toggle("outer-grid--expand");
  nav.classList.toggle("hide-nav");
};
