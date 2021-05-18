/* eslint-disable */
import "bootstrap";
import "./style.css";

const INPUT = document.querySelector("#inputOfNumberOfCards");
const BUTTON = document.querySelector("#generatorCard");
const selectButton = document.querySelector("#selection");
const bubbleButton = document.querySelector("#bubble");
let myArray = [];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const SUITS = ["♠", "♣", "♥", "♦"];
const SECTION_TO_DRAW = document.querySelector("#drawnCardsContainer");
const SECTION_TO_DRAW_SELECTED = document.querySelector("#drawnCardsSelected");

window.onload = function() {
  getCards();
  selectSort();
};

const getCards = () => {
  BUTTON.addEventListener("click", event => {
    event.preventDefault();
    SECTION_TO_DRAW.innerHTML = "";

    for (let index = 0; index < INPUT.value; index++) {
      let myCard = generateCards();
      drawCard(myCard, SECTION_TO_DRAW);
      myArray.push(myCard);
    }
  });
};

const generateCards = () => {
  let id = getRandom(VALUES.length);
  let card = {
    id: id,
    value: VALUES[id],
    suit: SUITS[getRandom(SUITS.length)]
  };
  return card;
};

const getRandom = maxNumber => {
  return Math.floor(Math.random() * maxNumber);
};

const drawCard = (card, section) => {
  let cardBody = document.createElement("div");
  cardBody.classList.add("card");

  let firstSuitContainer = document.createElement("div");
  let firstSuit = document.createTextNode(card.suit);
  firstSuitContainer.appendChild(firstSuit);
  firstSuitContainer.classList.add("firstSuit");

  let valueContainer = document.createElement("div");
  let value = document.createTextNode(card.value);
  valueContainer.appendChild(value);
  valueContainer.classList.add("valueContainer");

  let secondSuitContainer = document.createElement("div");
  let secondSuit = document.createTextNode(card.suit);
  secondSuitContainer.appendChild(secondSuit);
  secondSuitContainer.classList.add("secondSuit");

  if (card.suit == "♥" || card.suit == "♦") {
    firstSuitContainer.classList.add("red");
    secondSuitContainer.classList.add("red");
  } else {
    firstSuitContainer.classList.add("black");
    secondSuitContainer.classList.add("black");
  }

  cardBody.appendChild(firstSuitContainer);
  cardBody.appendChild(valueContainer);
  cardBody.appendChild(secondSuitContainer);

  section.appendChild(cardBody);
};

const selectSort = () => {
  selectButton.addEventListener("click", () => {
    console.log("gggggggggggggggggggggggg");
    let min = 0;
    let arr = myArray;
    while (min < arr.length) {
      for (let i = min + 1; i < arr.length; i++) {
        if (arr[min].id > arr[i].id) {
          let aux = arr[min];
          arr[min] = arr[i];
          arr[i] = aux;
        }
      }
      min++;
    }
    myArray = [];
    for (let i = 0; i < arr.length; i++) {
      drawCard(arr[i], SECTION_TO_DRAW_SELECTED);
    }
  });
};

// const bubbleSort = (arr) => {
//     let wall = arr.length - 1; //we start the wall at the end of the array
//     while (wall > 0){
//         let index = 0;
//         while (index < wall) {
//           //compare the adjacent positions, if the right one is bigger, we have to swap
//           if (arr[index] > arr[index + 1]) {
//             let aux = arr[index];
//             arr[index] = arr[index + 1];
//             arr[index + 1] = aux;
//           }
//           index++;
//         }
//         wall--; //decrease the wall for optimization
//     }
// 	return arr;
// };
