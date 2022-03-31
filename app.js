function randomColor() {
  let string = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let color = [];

  for (let i = 0; i < 6; i++) {
    let number = Math.floor(Math.random() * 16);
    color.push(string[number]);
  }

  let final = color.join("");
  return `#${final}`;
}

let input = document.querySelector("input[type=textbox]");
let div = document.querySelector("#jod");

// USING CARET

let count = 0;
let caret;
input.addEventListener("keydown", (event) => {
  let span = document.createElement("span");
  span.setAttribute("id", count);
  // console.log("Key " + event.key);
  // console.log("Which " + event.which);
  count++;
  // console.log(event);
  caret = event.target.selectionStart;
  console.log(caret);
  if (event.which >= 48 && event.which <= 90) {
    span.textContent = event.key;
    span.style.color = randomColor();
    div.appendChild(span);
  } else if (event.which == 8) {
    let allspans = document.querySelectorAll("#jod span");
    // console.log(allspans[allspans.length - 1]);
    div.removeChild(allspans[caret - 1]);
  }
  // else if(event.which ==46 ){

  // }
});
