const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const engineIcon = document.querySelector("#engineIcon");

function search() {
  if (engineIcon.classList[1] === "fa-n") {
    window.open(
      `https://search.naver.com/search.naver?query=${searchInput.value}`
    );
  } else {
    window.open(`https://www.google.co.kr/search?q=${searchInput.value}`);
  }
  searchInput.value = "";
}

function bodyMouseupEventHandle(event) {
  if (event.target.id === "searchSubmit") {
    search();
  }
}
function searchFormEventHandle(event) {
  event.preventDefault();
  search();
}
document.body.addEventListener("mouseup", bodyMouseupEventHandle);
searchForm.addEventListener("submit", searchFormEventHandle);
