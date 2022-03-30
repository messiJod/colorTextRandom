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

// input.addEventListener("input", (event) => {
//   console.log(event);
//   jod.innerText = input.value;
//   jod.style.color = randomColor();
// });

// using Span
// input.addEventListener("input", (event) => {
//   let span = document.createElement("span");
//   console.log(event);
//   if (event.data == "null") {
//     div.removeChild(span);
//   }
//   span.textContent = event.data;
//   span.style.color = randomColor();
//   div.appendChild(span);
// });

// With input
input.addEventListener("input", (event) => {
  let span = document.createElement("span");
  if (event.inputType != "deleteContentBackward") {
    span.textContent = event.data;
    span.style.color = randomColor();
    div.appendChild(span);
  } else {
    // let allSpan = document.querySelector("#jod span:last-child");
    // let spans = document.querySelectorAll("span");
    // console.log(spans[spans.length - 1]);
    div.removeChild(div.lastChild);
  }
});

// let wrapper = document.createElement("ul");
// let child = document.createElement("li");
// function chnge() {
//   for (let i = 0; i < 5; i++) {
//     child.innerText = i;
//     wrapper.appendChild(child);
//   }
//   document.body.append(wrapper);
// }

// function remove() {
//   wrapper.removeChild(wrapper.lastElementChild);
// }
// chnge();

// let strop = "jaddu";
// let array = [];
// for (let i = 0; i < strop.length; i++) {
//   array.push(strop[i]);
//   array[i]
// }
// console.log(array);
