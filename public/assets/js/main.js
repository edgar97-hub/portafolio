/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink?.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/

const scrollheader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", scrollheader);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_23lo1wm",
      "template_7qb9f4p",
      "#contact-form",
      "7nlys2BZAb6kPe6yf"
    )
    .then(
      () => {
        contactMessage.textContent = "Message send successfully";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not send (service error)";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);
/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scroll = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scroll.classList.add("show-scroll")
    : scroll.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(`.home__data, .home__social, .contact__wrapper`);
sr.reveal(`.home__image, .skills__data`, { origin: "botton" });
sr.reveal(`.about__data, .skills__content`, { origin: "left" });
sr.reveal(`.about__image`, { origin: "right" });
sr.reveal(`.services__card, .projects__card`, { interval: 100 });
