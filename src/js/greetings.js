const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginInput");
const greeting = document.querySelector("#greeting");
const loginPlaceholder = document.querySelector("#loginPlaceholder");
const taskFrame = document.querySelector("#taskFrame");
const profileFrame = document.querySelector("#profileFrame");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const functionEventHandler = {
  showPlaceholder: function () {
    if (document.querySelector("#loginInput") == document.activeElement) {
      loginPlaceholder.classList.add(HIDDEN_CLASSNAME);
    } else {
      loginPlaceholder.classList.remove(HIDDEN_CLASSNAME);
      loginPlaceholder.style.animationName = `showPlaceholder`;
      loginPlaceholder.style.animationDuration = `0.5S`;
      loginPlaceholder.style.animationTimingFunction = `ease-in`;
      loginPlaceholder.style.animationFillMode = `both`;
    }
  },
  hiddenPlaceholder: function () {
    loginPlaceholder.classList.add(HIDDEN_CLASSNAME);
  },
  showInputLine: function () {
    loginInput.style.animationName = `showInput`;
    loginInput.style.animationDuration = `0.5s`;
    loginInput.style.animationTimingFunction = `ease-in`;
    loginInput.style.animationFillMode = `both`;
  },
  hiddenInputLine: function () {
    loginInput.style.animationName = ``;
  },
  showGreeting: function () {
    greeting.style.animationName = `showGreeting`;
    greeting.style.animationDuration = `1.5S`;
    greeting.style.animationTimingFunction = `ease-in`;
    greeting.style.animationFillMode = `both`;
    greeting.style.animationDelay = "1s";
    greeting.addEventListener("animationend", function () {
      greeting.classList.add(HIDDEN_CLASSNAME);
    });
  },
  showTaskFrame: function () {
    taskFrame.classList.remove(HIDDEN_CLASSNAME);
    taskFrame.style.animationName = `showTaskFrame`;
    taskFrame.style.animationDuration = `0.5S`;
    taskFrame.style.animationTimingFunction = `ease-in`;
    taskFrame.style.animationFillMode = `both`;
    taskFrame.style.animationDelay = "0.5s";
  },
  showProflieFrame: function () {
    profileFrame.classList.remove(HIDDEN_CLASSNAME);
    profileFrame.style.animationName = `showProflieFrame`;
    profileFrame.style.animationDuration = `0.5S`;
    profileFrame.style.animationTimingFunction = `ease-in`;
    profileFrame.style.animationFillMode = `both`;
    profileFrame.style.animationDelay = "0.5s";
  },
  removeElements: function () {
    greeting.remove();
    loginForm.remove();
  },
};
function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
  functionEventHandler.showGreeting();
}

function paintGreetings() {
  const username = localStorage.getItem("username");
  greeting.innerHTML = `Hello ${username}`;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
  functionEventHandler.showGreeting();
}

loginForm.addEventListener("mouseover", functionEventHandler.showInputLine);
loginForm.addEventListener("mouseout", functionEventHandler.hiddenInputLine);
loginForm.addEventListener("mouseover", functionEventHandler.showPlaceholder);
loginForm.addEventListener("mouseout", functionEventHandler.hiddenPlaceholder);
loginInput.addEventListener("focus", functionEventHandler.hiddenPlaceholder);
greeting.addEventListener("animationend", functionEventHandler.removeElements);
greeting.addEventListener("animationend", functionEventHandler.showTaskFrame);
greeting.addEventListener(
  "animationend",
  functionEventHandler.showProflieFrame
);
