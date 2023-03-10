const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
// dark mode
function darkMode() {
  nav.style.backgroundColor = "rgba(0 0 0 0.5)";
  textBox.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.remove("fa-sun");
  toggleIcon.children[1].classList.add("fa-moon");
  image2.src = "img/undraw_feeling_proud_dark.svg";
  image1.src = "img/undraw_proud_coder_dark.svg";
  image3.src = "img/undraw_conceptual_idea_dark.svg";
}
// light mode
function lightMode() {
  nav.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  textBox.style.backgroundColor = "rgb(255, 92, 92)";
  console.log(toggleIcon);
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.add("fa-sun");
  toggleIcon.children[1].classList.remove("fa-moon");
  image2.src = "img/undraw_feeling_proud_light.svg";
  image1.src = "img/undraw_proud_coder_light.svg";
  image3.src = "img/undraw_conceptual_idea_light.svg";
}
// switch theme dynamically
function switchTheme(event) {
  console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    lightMode();
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme);
