// Select how many players: for three 20 Rounds, for four 15 Rounds, for five 12 Rounds and for six 10 Rounds.
const pointElements = document.querySelectorAll(".points-elements");
const buttonThreePlayer = document.getElementById("player3");
const buttonFourPlayer = document.getElementById("player4");
const buttonFivePlayer = document.getElementById("player5");
const buttonSixPlayer = document.getElementById("player6");
const nameInput = document.querySelectorAll(".name");
const points = document.querySelectorAll(
  "#points1, #points2, #points3, #points4, #points5, #points6"
);

function createElements(rounds) {
  buttonThreePlayer.disabled = true;
  buttonFourPlayer.disabled = true;
  buttonFivePlayer.disabled = true;
  buttonSixPlayer.disabled = true;
  for (let i = 0; i < rounds; i++) {
    let element1 = pointElements[0].cloneNode(true);
    element1.id = "points-" + i + "-1";
    document.querySelector(".points-elements-1").appendChild(element1);
    let element2 = pointElements[1].cloneNode(true);
    element2.id = "points-" + i + "-2";
    document.querySelector(".points-elements-2").appendChild(element2);
    let element3 = pointElements[2].cloneNode(true);
    element3.id = "points-" + i + "-3";
    document.querySelector(".points-elements-3").appendChild(element3);
  }
  pointElements[0].style.display = "none";
  pointElements[1].style.display = "none";
  pointElements[2].style.display = "none";

  if (rounds <= 15) {
    for (let i = 0; i < rounds; i++) {
      let element4 = pointElements[3].cloneNode(true);
      element4.id = "points-" + i + "-4";
      document.querySelector(".points-elements-4").appendChild(element4);
    }
    pointElements[3].style.display = "none";

    if (rounds <= 12) {
      for (let i = 0; i < rounds; i++) {
        let element5 = pointElements[4].cloneNode(true);
        element5.id = "points-" + i + "-5";
        document.querySelector(".points-elements-5").appendChild(element5);
      }
    }
    pointElements[4].style.display = "none";

    if (rounds <= 10) {
      for (let i = 0; i < rounds; i++) {
        let element6 = pointElements[5].cloneNode(true);
        element6.id = "points-" + i + "-6";
        document.querySelector(".points-elements-6").appendChild(element6);
      }
      pointElements[5].style.display = "none";
    }
  }
}

function threePlayer() {
  pointElements[3].remove();
  pointElements[4].remove();
  pointElements[5].remove();
  nameInput[3].remove();
  nameInput[4].remove();
  nameInput[5].remove();
  createElements(20);
  buttonThreePlayer.disabled = false;
}

buttonThreePlayer.addEventListener("click", threePlayer);

function fourPlayer() {
  pointElements[4].remove();
  pointElements[5].remove();
  nameInput[4].remove();
  nameInput[5].remove();
  createElements(15);
  buttonFourPlayer.disabled = false;
}
buttonFourPlayer.addEventListener("click", fourPlayer);

function fivePlayer() {
  pointElements[5].remove();
  nameInput[5].remove();
  createElements(12);
  buttonFivePlayer.disabled = false;
}
buttonFivePlayer.addEventListener("click", fivePlayer);

function sixPlayer() {
  createElements(10);
  buttonSixPlayer.disabled = false;
}
buttonSixPlayer.addEventListener("click", sixPlayer);

// Select if you like to play with advance variation( plus or minus 1) Stiche !== Roundnumber
const buttonBeginner = document.getElementById("beginner");
const buttonAdvance = document.getElementById("advance");
const trickTake = document.querySelectorAll(
  "#trick-take-1, #trick-take-2, #trick-take-3, #trick-take-4, #trick-take-5, #trick-take-6"
);
const trickGet = document.querySelectorAll(
  "#trick-get-1, #trick-get-2, #trick-get-3, #trick-get-4, #trick-get-5, #trick-get-6"
);
let counterRounds = 0;
let resultTrickTake = 0;
let player;

function howManyPlayers() {
  const pointsTrick0 = document.querySelectorAll(
    "#points-" + (counterRounds - 1) + "-1 > *"
  );
  const pointsTrick1 = document.querySelectorAll(
    "#points-" + (counterRounds - 1) + "-2 > *"
  );
  const pointsTrick2 = document.querySelectorAll(
    "#points-" + (counterRounds - 1) + "-3 >*"
  );
  const pointsTrick3 = document.querySelectorAll(
    "#points-" + (counterRounds - 1) + "-4 >*"
  );
  const pointsTrick4 = document.querySelectorAll(
    "#points-" + (counterRounds - 1) + "-5 >*"
  );
  const pointsTrick5 = document.querySelectorAll(
    "#points-" + (counterRounds - 1) + "-6 >*"
  );
  if (
    !document.contains(pointElements[3]) &&
    !document.contains(pointElements[4])
  ) {
    player = 3;
    round = 20;
    pointsGetTrick = [pointsTrick0[2], pointsTrick1[2], pointsTrick2[2]];
    pointsTakeTrick = [pointsTrick0[1], pointsTrick1[1], pointsTrick2[1]];
    pointsEachRound = [pointsTrick0[0], pointsTrick1[0], pointsTrick2[0]];
    goToNextRound = [
      pointsTrick0[0].innerText,
      pointsTrick1[0].innerText,
      pointsTrick2[0].innerText,
    ];
    advanceVariation = ["", "", ""];
    nameInputRandom = ["", "", ""];
  } else if (
    !document.contains(pointElements[4]) &&
    !document.contains(pointElements[5])
  ) {
    player = 4;
    round = 15;
    pointsGetTrick = [
      pointsTrick0[2],
      pointsTrick1[2],
      pointsTrick2[2],
      pointsTrick3[2],
    ];
    pointsTakeTrick = [
      pointsTrick0[1],
      pointsTrick1[1],
      pointsTrick2[1],
      pointsTrick3[1],
    ];
    pointsEachRound = [
      pointsTrick0[0],
      pointsTrick1[0],
      pointsTrick2[0],
      pointsTrick3[0],
    ];
    goToNextRound = [
      pointsTrick0[0].innerText,
      pointsTrick1[0].innerText,
      pointsTrick2[0].innerText,
      pointsTrick3[0].innerText,
    ];
    advanceVariation = ["", "", "", ""];
    nameInputRandom = ["", "", "", ""];
  } else if (
    document.contains(pointElements[3]) &&
    document.contains(pointElements[4]) &&
    !document.contains(pointElements[5])
  ) {
    player = 5;
    round = 12;
    pointsGetTrick = [
      pointsTrick0[2],
      pointsTrick1[2],
      pointsTrick2[2],
      pointsTrick3[2],
      pointsTrick4[2],
    ];
    pointsTakeTrick = [
      pointsTrick0[1],
      pointsTrick1[1],
      pointsTrick2[1],
      pointsTrick3[1],
      pointsTrick4[1],
    ];
    pointsEachRound = [
      pointsTrick0[0],
      pointsTrick1[0],
      pointsTrick2[0],
      pointsTrick3[0],
      pointsTrick4[0],
    ];
    goToNextRound = [
      pointsTrick0[0].innerText,
      pointsTrick1[0].innerText,
      pointsTrick2[0].innerText,
      pointsTrick3[0].innerText,
      pointsTrick4[0].innerText,
    ];
    advanceVariation = ["", "", "", "", ""];
    nameInputRandom = ["", "", "", "", ""];
  } else if (document.contains(pointElements[5])) {
    player = 6;
    round = 10;
    pointsGetTrick = [
      pointsTrick0[2],
      pointsTrick1[2],
      pointsTrick2[2],
      pointsTrick3[2],
      pointsTrick4[2],
      pointsTrick5[2],
    ];
    pointsTakeTrick = [
      pointsTrick0[1],
      pointsTrick1[1],
      pointsTrick2[1],
      pointsTrick3[1],
      pointsTrick4[1],
      pointsTrick5[1],
    ];
    pointsEachRound = [
      pointsTrick0[0],
      pointsTrick1[0],
      pointsTrick2[0],
      pointsTrick3[0],
      pointsTrick4[0],
      pointsTrick5[0],
    ];
    goToNextRound = [
      pointsTrick0[0].innerText,
      pointsTrick1[0].innerText,
      pointsTrick2[0].innerText,
      pointsTrick3[0].innerText,
      pointsTrick4[0].innerText,
      pointsTrick5[0].innerText,
    ];
    advanceVariation = ["", "", "", "", "", ""];
    nameInputRandom = ["", "", "", "", "", ""];
  }
  console.log(player);
  console.log(round);
}
let buttonActiveBeginner = false;
let buttonActiveAdvance = false;
buttonBeginner.addEventListener("click", function () {
  buttonAdvance.disabled = true;
  buttonActiveBeginner = true;
  trickTaking();
});
buttonAdvance.addEventListener("click", function () {
  buttonBeginner.disabled = true;
  buttonActiveAdvance = true;
  trickTaking();
  console.log(buttonActiveAdvance);
});

// Input for Names
for (let i = 0; i < nameInput.length; i++) {
  nameInput[i].addEventListener("change", function () {
    nameInput[i].disabled = true;
    whoIsFirst(i);
  });
}

// 2 input fields: one for Angesagte Stiche / one for erhaltene Stiche
// count Points (if correct than 20 points + 10 for each Stich / else -10 for each Stich which is different)
let playerPoints = [0, 0, 0, 0, 0, 0];
let playercount = 0;

function trickTaking() {
  counterRounds++;
  howManyPlayers();
  resultTrickTake = 0;

  console.log(pointsGetTrick.value);
  for (let i = 0; i < player; i++) {
    pointsGetTrick[i].disabled = true;
    pointsTakeTrick[i].addEventListener("change", function () {
      pointsTakeTrick[i].disabled = true;
      let trickTakeValue = pointsTakeTrick[i].value;
      let trickTakeNumber = parseInt(trickTakeValue);
      advanceVariation[i] = trickTakeValue;
      resultTrickTake += trickTakeNumber;
      if (pointsTakeTrick[i].disabled === true) {
        pointsGetTrick[i].disabled = false;
      }
      if (buttonActiveAdvance) {
        const checkFirstIndex = advanceVariation.indexOf("");
        console.log("advance is on");
        if (resultTrickTake === counterRounds && checkFirstIndex === -1) {
          console.log("choose another Trick");
          pointsGetTrick[i].disabled = true;
          pointsTakeTrick[i].disabled = false;
          resultTrickTake -= trickTakeNumber;
          console.log(resultTrickTake);
          pointsTakeTrick[i].value = "";
        }
      }
    });
  }
  for (let i = 0; i < player; i++) {
    pointsGetTrick[i].addEventListener("change", function () {
      pointsGetTrick[i].disabled = true;
      let trickGetValue = pointsGetTrick[i].value;
      let trickGetNumber = parseInt(trickGetValue);
      let trickTakeValue = pointsTakeTrick[i].value;
      let trickTakeNumber = parseInt(trickTakeValue);

      if (trickTakeNumber === trickGetNumber) {
        playerPoints[i] += 20 + trickTakeNumber * 10;
        pointsEachRound[i].innerText = playerPoints[i];
        pointsEachRound[i].disabled = true;
      } else if (trickTakeNumber !== trickGetNumber) {
        let resultTricks = trickGetNumber - trickTakeNumber;
        playerPoints[i] += -Math.abs(resultTricks * 10);
        pointsEachRound[i].innerText = playerPoints[i];
        pointsEachRound[i].disabled = true;
      }
      console.log(goToNextRound);
      goToNextRound[i] = pointsEachRound[i].innerText;
      console.log(goToNextRound);
      if (!goToNextRound.includes("") && counterRounds < 2) {
        console.log("next Round");
        newRound();
      } else if (!goToNextRound.includes("") && counterRounds === 2) {
        let whoIsTheWinner = 0;
        for (let i = 0; i < playerPoints.length; i++) {
          if (whoIsTheWinner < playerPoints[i]) {
            whoIsTheWinner = playerPoints[i];
            whoWon = [];
          }
          if (whoIsTheWinner === playerPoints[i]) {
            whoWon.push(nameInput[i].value);
          }
          whoIsTheWinnerBox(whoWon);
        }
      }
    });
  }
}
function newRound() {
  trickTaking();
}
// Button who start dealing cards - PopUp how is first (left)
const whoIsFirstBox = document.getElementById("who-is-first-box");
const whoIsFirstButton = document.getElementById("beginn-btn");
function whoIsFirst(i) {
  nameInputRandom[i] = nameInput[i].value;
  console.log(nameInputRandom);
  if (!nameInputRandom.includes("")) {
    nameInputRandom.sort(() => Math.random() - 0.5);
    whoIsFirstBox.style.display = "block";
    const whoIsFirstMessage = document.getElementById("who-is-first-text");
    whoIsFirstMessage.innerText = `You go first: ${nameInputRandom[0]}`;
  }
}

// after Number of Rounds who is the Winner?
const winnerBox = document.getElementById("winner-box");
const winnerButtonNextGame = document.getElementById("new-game-btn");
const winnerOkayButton = document.getElementById("ok-btn");
function whoIsTheWinnerBox(whoWon) {
  winnerBox.style.display = "block";
  const winnerMessage = document.getElementById("winner-text");
  winnerMessage.innerText = `Congratulation: ${whoWon}`;
}

function closeWindow() {
  if (whoIsFirstBox.style.display === "block") {
    whoIsFirstBox.style.display = "none";
  } else if (winnerBox.style.display === "block") {
    winnerBox.style.display = "none";
  }
}
winnerOkayButton.addEventListener("click", closeWindow);
whoIsFirstButton.addEventListener("click", closeWindow);

// Reset Game and Reset Round
