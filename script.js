// script.js

// NAVIGATION ACTIVE LINK

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }

  });

});


// CONTACT FORM

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thank you for contacting me!");

  form.reset();

});
/* =========================
   POPUP FUNCTIONALITY
========================= */

const cards = document.querySelectorAll(".card");
const popups = document.querySelectorAll(".popup-card");
const overlay = document.querySelector(".overlay");
const closeBtns = document.querySelectorAll(".close-btn");

/* OPEN POPUP */

cards.forEach(card => {

    card.addEventListener("click", () => {

        const popupId = card.getAttribute("data-popup");

        if(!popupId) return;

        const popup = document.getElementById(popupId);

        overlay.classList.add("active");
        popup.classList.add("active");

    });

});

/* CLOSE POPUP */

function closePopup(){

    overlay.classList.remove("active");

    popups.forEach(popup => {
        popup.classList.remove("active");
    });

}

/* CLOSE BUTTON */

closeBtns.forEach(btn => {

    btn.addEventListener("click", closePopup);

});

/* CLICK OUTSIDE */

overlay.addEventListener("click", closePopup);
