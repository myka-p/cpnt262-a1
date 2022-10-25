// callback function
const equiptBag = function() {
  // array of treats - Mimi's Pantry
  const catFood = [
    "Fish",
    "Beef",
    "Yogurt",
    "Turkey",
    "Banana",
    "Asparagus",
    "Cheese",
    "Cucumber",
    "Eggs",
    "Lamb"
  ];

  // pick random treat from array
  const foodObtained = catFood[Math.floor(Math.random() * catFood.length)];

  // list of the treats available
  const listOfTreats = document.querySelector('.treatsList');
  listOfTreats.innerHTML = `Mimi's Pantry: <strong>${catFood.join(' | ')}</strong>`;

  // add item to bag
  const obtained = document.querySelector('.treatsObtained');
  obtained.innerHTML = `<em>Item obtained +1 : <strong>${foodObtained}</strong></em>`;
}

const playerName = prompt("Enter your name:");
const greeting = document.querySelector('.intro');
greeting.innerHTML = `Hello! ${playerName}`;

// event listener that invokes callback function when button is clicked
const button = document.querySelector('button');
button.addEventListener('click', equiptBag);

