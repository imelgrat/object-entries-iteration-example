let car = { color: "blue", model: "Sandero", doors: 4 };
const app = document.getElementById("app");

// Create an array with the object's enumerable values
const entries = Object.entries(car);
app.insertAdjacentHTML(
  "beforeend",
  "The car's property entries are:  <br>";
);
for (let [key, value] of Object.entries(entries)) {
  app.insertAdjacentHTML(
    "beforeend",
    `${key}: ${value}<br>`;
  );
}
