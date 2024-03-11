//Generating the array of the cards content
const animals = [
  { id: 1, content: "🐼" },
  { id: 2, content: "🦍" },
  { id: 3, content: "🦓" },
  { id: 4, content: "🦔" },
  { id: 5, content: "🐯" },
  { id: 6, content: "🐀" },
  { id: 7, content: "🐴" },
  { id: 8, content: "🐷" },
  { id: 9, content: "🐼" },
  { id: 10, content: "🦍" },
  { id: 11, content: "🦓" },
  { id: 12, content: "🦔" },
  { id: 13, content: "🐯" },
  { id: 14, content: "🐀" },
  { id: 15, content: "🐴" },
  { id: 16, content: "🐷" },
];

generateGrid();

matchTheCards();

function generateGrid() {
  //Selecting the container
  const container = document.getElementById("container");

  //Generating Cards into the container
  for (let i = 0; i < 16; i++) {
    container.innerHTML += `<div class="card"><div class="hidden"></div><div class="showed"></div></div>`;
  }

  //Selecting the cards
  const cards = document.querySelectorAll(".card");

  //Selecting the hidden elements
  const hidden = document.querySelectorAll(".hidden");

  //Selecting the showed elements
  const showed = document.querySelectorAll(".showed");

  //Generating random numbers from 1 to 16
  let randomArray = [];
  let randomNumb;

  while (randomArray.length < 16) {
    randomNumb = Math.floor(Math.random() * 16) + 1;
    if (!randomArray.includes(randomNumb)) {
      randomArray.push(randomNumb);
    }
  }

  //Generating an array with animals in random order
  let randomAnimals = [];
  while (randomAnimals.length < 16) {
    randomArray.forEach((randomNumb) => {
      animals.forEach((animal) => {
        if (randomNumb == animal.id) {
          randomAnimals.push(animal);
        }
      });
    });
  }

  //Working on the single card
  for (let i = 0; i < cards.length; i++) {
    hidden[i].innerHTML = randomAnimals[i].content;
    showed[i].innerHTML = `<i class="fa-solid fa-question"></i>`;
  }
}

function matchTheCards() {
  //Selecting all cards dom elements
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) =>
    //Adding click event to each card
    card.addEventListener("click", function () {
      card.classList.add("reveal");
      //Taking all the cards clicked
      let clickedCards = document.querySelectorAll(".reveal");
      console.log(clickedCards);

      //Checking if the clicked cards content is the same
      if (clickedCards.length >= 2) {
        //If its not the same , reset the clicked cards to zero
        if (clickedCards[0].innerHTML != clickedCards[1].innerHTML) {
          setTimeout(function () {
            clickedCards.forEach((clickedCard) =>
              clickedCard.classList.remove("reveal")
            );
          }, 700);

          //If its the same , reset the clicked cards to zero and give the matched cards another class
        } else {
          clickedCards.forEach((clickedCard) => {
            clickedCard.classList.remove("reveal");
            clickedCard.classList.add("matched");
          });
        }
      }
      //End the game
      const gameOverEl = document.getElementById("game-over");
      const matchedCards = document.querySelectorAll(".matched");
      console.log(matchedCards);
      if (matchedCards.length == 16) {
        gameOverEl.innerHTML = "hai vinto";
      }
    })
  );
}
