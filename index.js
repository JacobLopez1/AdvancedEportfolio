let contrastToggle = false;
const scaleFactor = 1 / 5


function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape")
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  
  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const parityFactor = isOdd ? -1 : 1;

    shapes[i].style.transform = `rotate(${(x + y) * parityFactor}deg)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_0o61afv",
      "template_8x9pzld",
      event.target,
      "krBQzk9i33e5qqdlJ"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly: lopezjacob2003.jl@gmail.com"
      );
    });
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
