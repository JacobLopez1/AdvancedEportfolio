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
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = !isModalOpen;
    //toggle modal
    document.body.classList += " modal--open";
}