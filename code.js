// const button = document.querySelector("button");

// let clickFunc = () => {
//   console.log("You clicked me!");
// };

// let anotherFunc = () => {
//   alert("hey I got clicked");
//   button.removeEventListener("click", anotherFunc);
// };

// This is old style and not used anymore!
// button.onclick = clickFunc; //This doesn't run because of the other onclick!
// button.onclick = anotherFunc

// button.addEventListener("click", clickFunc);
// button.addEventListener("click", anotherFunc);

// window.addEventListener("resize", function (evt) {
//   console.log(evt);
//   console.log(window.innerWidth);
// });

// button.addEventListener("click", (event) => {
//   console.log(event);
// });

let button = document.querySelector("#add-element");

const createCard = (title, content, extra) => {
  let newCard = document.createElement("div");
  newCard.setAttribute("class", "card");

  let newH2 = document.createElement("h2");
  newH2.innerText = title;

  let newP = document.createElement("p");
  newP.append(content);

  let newEp = document.createElement("p");
  newEp.setAttribute("class", "extra");
  newEp.innerText = extra;

  newCard.append(newH2, newP, newEp);

  return newCard;
};

button.addEventListener("click", (evt) => {
  evt.target.disabled = true;
  let titleInput = document.getElementById("card-title");
  let contentInput = document.getElementById("card-content");
  let extraInput = document.getElementById("card-extra");

  let newCard = createCard(
    titleInput.value,
    contentInput.value,
    extraInput.value
  );
  document.getElementById("cards").append(newCard);
  titleInput.value = "";
  contentInput.value = "";
  extraInput.value = "";
});
