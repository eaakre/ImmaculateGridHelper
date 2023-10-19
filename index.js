import Name from "./Name.js";

const inputForm = document.querySelector("#inputForm");
const inputName = document.forms["inputForm"]["playerName"];
const inputNumber = document.forms["inputForm"]["gridNumber"];
const inputSubmit = document.querySelector("#inputSubmit");

const grid1 = document.querySelector("#grid1");
const grid2 = document.querySelector("#grid2");
const grid3 = document.querySelector("#grid3");
const grid4 = document.querySelector("#grid4");
const grid5 = document.querySelector("#grid5");
const grid6 = document.querySelector("#grid6");
const grid7 = document.querySelector("#grid7");
const grid8 = document.querySelector("#grid8");
const grid9 = document.querySelector("#grid9");

const grids = {
  g1: {
    name: "grid1",
    div: grid1,
  },
  g2: {
    name: "grid2",
    div: grid2,
  },
  g3: {
    name: "grid3",
    div: grid3,
  },
  g4: {
    name: "grid4",
    div: grid4,
  },
  g5: {
    name: "grid5",
    div: grid5,
  },
  g6: {
    name: "grid6",
    div: grid6,
  },
  g7: {
    name: "grid7",
    div: grid7,
  },
  g8: {
    name: "grid8",
    div: grid8,
  },
  g9: {
    name: "grid9",
    div: grid9,
  },
};

// function getMarkup(name) {
//   let newName = document.createElement("p");
//   newName.textContent = name;
//   newName.classList.add("name__added");
//   return newName;
// }

// function addToGrid(name, gridNum) {
//   for (let [key, value] of Object.entries(grids)) {
//     if (value.name === gridNum) {
//       console.log(value.div);
//       let contentArea = value.div.querySelector(".added__names");
//       contentArea.append(getMarkup(name));
//     }
//   }
// }

inputSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let newName = inputName.value;
  let newGrid = `grid${inputNumber.value}`;
  // addToGrid(newName, newGrid);
  let player = new Name(newName, newGrid, grids);
  player.addToGrid();
  player.setEventListeners();
});
