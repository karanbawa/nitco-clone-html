const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".secondary-header.nitco-menu-list");

function showMenuItems(e) {
  // console.log("menu");
  console.log("menutem");
  if (menuItems.classList.contains(["mobile-menu-wrapper", "open-menu"])) {
    menuItems.classList.remove("mobile-menu-wrapper", "open-menu");
    menuItems.classList.add("secondary-header", "nitco-menu-list");
  } else {
    menuItems.classList.remove("secondary-header", "nitco-menu-list");
    menuItems.classList.add("mobile-menu-wrapper", "open-menu");
  }
}

function switchTheme(e) {
  // console.log("menu");
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    console.log(menuItems);
    menuItems.classList.remove("mobile-menu-wrapper", "open-menu");
    menuItems.classList.add("secondary-header", "nitco-menu-list");
  } else {
    menu.classList.add("open");
    menuItems.classList.remove("secondary-header", "nitco-menu-list");
    menuItems.classList.add("mobile-menu-wrapper", "open-menu");
  }
}

menu.addEventListener("click", switchTheme, false);
menuItems.addEventListener("click", showMenuItems, false);

const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");
const contactForm = document.getElementById("contact-form");
const errorElement = document.getElementById("error");
const successMsg = document.getElementById("success-msg");
const submitBtn = document.getElementById("submit");

const validate = (e) => {
  e.preventDefault();

  if (name.value.length < 3) {
    errorElement.innerHTML = "Your name should be at least 3 characters long.";
    return false;
  }

  if (phone.value.length < 10 || phone.value.length > 10) {
    errorElement.innerHTML = `Your Phone Number should be at least 10 digit long.`;
    return false;
  }

  if (!(email.value.includes(".") && email.value.includes("@"))) {
    errorElement.innerHTML = "Please enter a valid email address.";
    return false;
  }

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = "Please enter a valid email address.";
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = "Please write a longer message.";
    return false;
  }

  errorElement.innerHTML = "";
  successMsg.innerHTML =
    "Thank you! I will get back to you as soon as possible.";

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = "";
    document.getElementById("contact-form").reset();
  }, 6000);

  return true;
};

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

submitBtn.addEventListener("click", validate);
