const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const allIngredients = document.querySelector("ul#ingredients");


const addIngredient = ingredients.map( option => {
       const createingredient = document.createElement("li");
       createingredient.textContent = option;
       return createingredient;
});
console.log(addIngredient);
allIngredients.append(...addIngredient);

// const buildIngredients = () => {
//   const allIngredients = document.querySelector("ul#ingredients");
//   for (const ingredient of ingredients) {
//     const createingredient = document.createElement("li");
//     createingredient.textContent = ingredient;
//     allIngredients.appendChild(createingredient);
//   }
//   console.log(allIngredients);
// };
// buildIngredients();
