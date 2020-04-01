let car = { color: "blue", model: "Sandero", doors: 4 };
const app = document.getElementById("app");

// Create an array with the object's enumerable values
const values = Object.values(car);
app.insertAdjacentHTML(
  "beforeend",
  "The car's property values are:  " + values.join(", ")
);
