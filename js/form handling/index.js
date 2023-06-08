const form = document.querySelector(".container");

const mailErrorMsg = "please enter a username";
const mailPatternErrorMsg = "please enter a valid mail";
const passwordErrorMsg = "please enter a password";
const passwordPatternErrorMsg = "password should be alpha numeric";
const mailElement = form.elements["mail"];
const passwordElement = form.elements["password"];
const mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
let mailVerified = false;
let passwordVerified = false;

const showMsg = (element, msg, setVerification) => {
  element.nextElementSibling.innerHTML = msg;
  setVerification = false;
  return;
};

const removeMsg = (element) => {
  element.nextElementSibling.innerHTML = "";
  return;
};

const validate = (value, pattern) => {
  return pattern.test(value);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!mailElement.value) {
    showMsg(mailElement, mailErrorMsg, mailVerified);
  } else if (!validate(mailElement.value, mailPattern)) {
    showMsg(mailElement, mailPatternErrorMsg, mailVerified);
  } else {
    mailVerified = true;
    removeMsg(mailElement);
  }
  if (!passwordElement.value) {
    showMsg(passwordElement, passwordErrorMsg, passwordVerified);
  } else if (!validate(passwordElement.value, passwordPattern)) {
    showMsg(passwordElement, passwordPatternErrorMsg, passwordVerified);
  } else {
    passwordVerified = true;
    removeMsg(passwordElement);
  }
  if (passwordVerified && mailVerified) {
    form.submit();
    mailElement.innerHTML = "";
    passwordElement.innerHTML = "";
    alert("submitted");
  }
});
