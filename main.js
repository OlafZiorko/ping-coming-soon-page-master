const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submitBtn");
const userInput = document.querySelector(".userInput");
const heading = document.querySelector(".header--heading");

// functions
function checkForm() {
  const userInputDate = userInput.value;

  if (userInputDate === "" || !userInputDate.includes("@")) {
    userInput.classList.add("error");
  } else if (!userInputDate === "" || userInputDate.includes("@")) {
    userInput.classList.remove("error");
    userInput.classList.add("sucess");

    heading.innerHTML = `
    <h1 class="header--heading">
      Thank you for <strong>Subscribstion!</strong>
    </h1>
  `;
  }
}

// listners
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
submitBtn.addEventListener("click", checkForm);
