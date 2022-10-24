// const axios = require("axios").default;

// const { default: axios } = require("axios");

// import axios from "axios";

const messageButton = document.querySelector("#message-button");
const nameArea = document.querySelector(".email-user-name");
const emailArea = document.querySelector(".email-input-area");
const subjectrea = document.querySelector(".subj-input-area");
const messageArea = document.querySelector(".text-area");

messageButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (!nameArea.value) {
    nameArea.style.borderColor = "red";
    nameArea.value = "  Enter something";
    console.log(nameArea.value);
    setTimeout(function () {
      nameArea.style.borderColor = "rgb(228, 228, 228)";
      nameArea.value = "";
    }, 2000);
  } else if (!emailArea.value) {
    emailArea.style.borderColor = "red";
    console.log("empty");
    emailArea.value = "  Enter something";
    setTimeout(function () {
      emailArea.style.borderColor = "rgb(228, 228, 228)";
      emailArea.value = "";
    }, 2000);
  } else if (!subjectrea.value) {
    subjectrea.style.borderColor = "red";
    console.log("empty");
    subjectrea.value = "  Enter something";
    setTimeout(function () {
      subjectrea.style.borderColor = "rgb(228, 228, 228)";
      subjectrea.value = "";
    }, 2000);
  } else if (!messageArea.value) {
    messageArea.style.borderColor = "red";
    console.log("empty");
    messageArea.value = " Enter something";
    setTimeout(function () {
      messageArea.style.borderColor = "rgb(228, 228, 228)";
      messageArea.value = "";
    }, 2000);
  } else {
    const sendMailFunction = function () {
      let body = {
        username: nameArea.value,
        email: emailArea.value,
        subject: subjectrea.value,
        message: messageArea.value,
      };

      fetch(
        "https://us-central1-project-1-c4606.cloudfunctions.net/sendEmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      )
        .then((res) => {
          console.log("Request complete! response:", res);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    sendMailFunction();

    // messageButton.addEventListener("click", sendMailFunction);
  }
});

//---------highlighting option---------------
const sectionAbout = document.querySelector(".section-about");
const sectionHome = document.querySelector(".section-home");
const sectionResume = document.querySelector(".section-resume");
const sectionPortfolio = document.querySelector(".section-portfolio");
const sectionServices = document.querySelector("#section-services");
const sectionContact = document.querySelector("#section-contact");

const aboutOption = document.querySelector(".about-option");
const homeOption = document.querySelector(".home-option");
const resumeOption = document.querySelector(".resume-option");
const portfolioOption = document.querySelector(".portfolio-option");
const servicesOption = document.querySelector(".services-option");
const contactOption = document.querySelector(".contact-option");

const optionsAbout = {
  threshold: 0.4,
};

const aboutIntersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      // aboutOption.classList.add("ifHighlight");
      aboutOption.style.color = "white";
    } else {
      aboutOption.style.color = "rgb(203, 201, 201)";
    }
  });
}, optionsAbout);

aboutIntersectionObserver.observe(sectionAbout);
const optionsHome = {
  threshold: 0.4,
};

const homeIntersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      // aboutOption.classList.add("ifHighlight");
      homeOption.style.color = "white";
    } else {
      homeOption.style.color = "rgb(203, 201, 201)";
    }
  });
}, optionsHome);

homeIntersectionObserver.observe(sectionHome);

const optionsResume = {
  threshold: 0.4,
};

const resumeIntersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      // aboutOption.classList.add("ifHighlight");
      resumeOption.style.color = "white";
    } else {
      resumeOption.style.color = "rgb(203, 201, 201)";
    }
  });
}, optionsResume);

resumeIntersectionObserver.observe(sectionResume);

const optionsPortfolio = {
  threshold: 0.4,
};

const portfolioIntersectionObserver = new IntersectionObserver(function (
  entries
) {
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      // aboutOption.classList.add("ifHighlight");
      portfolioOption.style.color = "white";
    } else {
      portfolioOption.style.color = "rgb(203, 201, 201)";
    }
  });
},
optionsPortfolio);

portfolioIntersectionObserver.observe(sectionPortfolio);

const optionsServices = {
  threshold: 0.4,
};

const servicesIntersectionObserver = new IntersectionObserver(function (
  entries
) {
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      // aboutOption.classList.add("ifHighlight");
      servicesOption.style.color = "white";
    } else {
      servicesOption.style.color = "rgb(203, 201, 201)";
    }
  });
},
optionsServices);

servicesIntersectionObserver.observe(sectionServices);

const optionsContact = {
  threshold: 0.4,
};

const contactIntersectionObserver = new IntersectionObserver(function (
  entries
) {
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      // aboutOption.classList.add("ifHighlight");
      contactOption.style.color = "white";
    } else {
      contactOption.style.color = "rgb(203, 201, 201)";
    }
  });
},
optionsContact);

contactIntersectionObserver.observe(sectionContact);
