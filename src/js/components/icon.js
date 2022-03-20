//const body = document.querySelector("body");
const fontAwesomeCodeDB = [
  { icon: "fa-google", type: "fa-brands", size: "null" },
  { icon: "fa-n", type: "fa-solid", size: "fa-lg" },
  { icon: "fa-trash", type: "fa-solid", size: "null" },
];

let fontAwesomeIcon = [];
let fontAwesomeIconObj = {};

function arrayDicToDictionary(iconStyle) {
  fontAwesomeIcon = fontAwesomeCodeDB.filter((item) => {
    return item.icon === `${iconStyle}`;
  });
  fontAwesomeIconObj = fontAwesomeIcon.reduce((object, item) => {
    return item;
  }, {});
}
function classAdd(element, iconStyle) {
  arrayDicToDictionary(iconStyle);
  element.target.classList.add(fontAwesomeIconObj.type);
  element.target.classList.add(fontAwesomeIconObj.icon);
  element.target.classList.add(fontAwesomeIconObj.size);
}
function classRemove(element, iconStyle) {
  arrayDicToDictionary(iconStyle);
  element.target.classList.remove(fontAwesomeIconObj.type);
  element.target.classList.remove(fontAwesomeIconObj.icon);
  element.target.classList.remove(fontAwesomeIconObj.size);
}

document.body.addEventListener("mousedown", (event) => {
  if (event.target.localName == "i") {
    console.log(event.target.classList);
    event.target.classList.add("fa-sm");
    console.log(event.target.classList);
  }
});
document.body.addEventListener("mouseout", (event) => {
  if (event.target.localName == "i") {
    event.target.classList.remove("fa-sm");
  }
});
document.body.addEventListener("mouseup", (event) => {
  if (event.target.localName == "i") {
    event.target.classList.remove("fa-sm");
  }
  if (event.target.id === "engineIcon") {
    if (event.target.className === "fa-solid fa-n fa-lg") {
      classAdd(event, `fa-google`);
      classRemove(event, `fa-n`);
    } else {
      classAdd(event, `fa-n`);
      classRemove(event, `fa-google`);
    }
  }
});
