const btnSubmit = document.querySelector(".btnSubmit");
const btnSaveChange = document.querySelector(".btnSaveChange");
const modal = document.querySelector(".contianer-modal");

// input fields
const inputTeamA = document.querySelector("#teamA_score");
const inputTeamB = document.querySelector("#teamB_score");
const fname = document.querySelector("#fname");
const email = document.querySelector("#email");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Submit button clicked");
  if (inputTeamA.value == "" || inputTeamB.value == "") {
    alert("Please enter the score for both teams");
    return;
  } else {
    modal.style.display = "flex";
  }
});

btnSaveChange.addEventListener("click", function () {
  console.log("button clicked");
  if (fname.value == "" || email.value == "") {
    return;
  } else {
    modal.style.display = "none";
    alert("Data saved successfully");
  }
});
