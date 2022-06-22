// Select how many players: for three 20 Rounds, for four 15 Rounds, for five 12 Rounds and for six 10 Rounds.
const pointElements = document.querySelectorAll(".points-elements");
const buttonThreePlayer = document.getElementById("player3");
const buttonFourPlayer = document.getElementById("player4");
const buttonFivePlayer = document.getElementById("player5");
const buttonSixPlayer = document.getElementById("player6");
const nameInput = document.querySelectorAll(".name");

function createElements(rounds) {
  for (let i = 1; i < rounds; i++) {
    let element1 = pointElements[0].cloneNode(true);
    element1.id = "points1-" + i;
    document.querySelector(".points-elements-1").appendChild(element1);
    let element2 = pointElements[1].cloneNode(true);
    element2.id = "points2-" + i;
    document.querySelector(".points-elements-2").appendChild(element2);
    let element3 = pointElements[2].cloneNode(true);
    element3.id = "points3-" + i;
    document.querySelector(".points-elements-3").appendChild(element3);
  }
  if (rounds <= 15) {
    for (let i = 1; i < rounds; i++) {
      let element4 = pointElements[3].cloneNode(true);
      element4.id = "points4-" + i;
      document.querySelector(".points-elements-4").appendChild(element4);
    }
    if (rounds <= 12) {
      for (let i = 1; i < rounds; i++) {
        let element5 = pointElements[4].cloneNode(true);
        element5.id = "points5-" + i;
        document.querySelector(".points-elements-5").appendChild(element5);
      }
    }
    if (rounds <= 10) {
      for (let i = 1; i < rounds; i++) {
        let element6 = pointElements[5].cloneNode(true);
        element6.id = "points6-" + i;
        document.querySelector(".points-elements-6").appendChild(element6);
      }
    }
  }
  buttonThreePlayer.disabled = true;
  buttonFourPlayer.disabled = true;
  buttonFivePlayer.disabled = true;
  buttonSixPlayer.disabled = true;
}
function threePlayer() {
  pointElements[3].remove();
  pointElements[4].remove();
  pointElements[5].remove();
  nameInput[3].remove();
  nameInput[4].remove();
  nameInput[5].remove();
  createElements(20);
}

buttonThreePlayer.addEventListener("click", threePlayer);

function fourPlayer() {
  pointElements[4].remove();
  pointElements[5].remove();
  nameInput[4].remove();
  nameInput[5].remove();
  createElements(15);
}
buttonFourPlayer.addEventListener("click", fourPlayer);

function fivePlayer() {
  pointElements[5].remove();
  nameInput[5].remove();
  createElements(12);
}
buttonFivePlayer.addEventListener("click", fivePlayer);

function sixPlayer() {
  createElements(10);
}
buttonSixPlayer.addEventListener("click", sixPlayer);

// Select if you like to play with advance variation( plus or minus 1) Stiche !== Roundnumber
const buttonBeginner = document.getElementById("beginner");
const buttonAdvance = document.getElementById("advance");
const trickTake = document.querySelectorAll(
  "#trick-take-1, #trick-take-2, #trick-take-3, #trick-take-4, #trick-take-5, #trick-take-6"
);
let counterRounds = 0;
let resultTrickTake;
let player;

function checkEquality(equal, player) {
  if (equal === false) {
    for (let i = 0; i < player; i++) {
      resultTrickTake += parseInt(trickTake[i].value);
      counterRounds !== resultTrickTake;
    }
  }
}

function howManyPlayers() {
  if (
    !document.contains(pointElements[3]) &&
    !document.contains(pointElements[4])
  ) {
    return (player = 3);
  } else if (
    !document.contains(pointElements[4]) &&
    !document.contains(pointElements[5])
  ) {
    return (player = 4);
  } else if (
    document.contains(pointElements[3]) &&
    document.contains(pointElements[4]) &&
    !document.contains(pointElements[5])
  ) {
    return (player = 5);
  } else if (document.contains(pointElements[5])) {
    return (player = 6);
  }
}
function beginnerButton() {
  checkEquality(true, howManyPlayers());
}
buttonBeginner.addEventListener("click", beginnerButton);
function advanceButton() {
  checkEquality(false, howManyPlayers());
}
buttonAdvance.addEventListener("click", advanceButton);

// Input for Names
for (let i = 0; i < nameInput.length; i++) {
  nameInput[i].addEventListener("change", function () {
    nameInput[i].disabled = true;
  });
}

// 2 input fields: one for Angesagte Stiche / one for erhaltene Stiche
// Button who start dealing cards - PopUp how is first (left)
// count Points (if correct than 20 points + 10 for each Stich / else -10 for each Stich which is different)
// after Number of Rounds who is the Winner?
// Reset Game and Reset Round
