
let parent = document.querySelector(".parent")
let link = "https://fakestoreapi.com/products";
let xml = new XMLHttpRequest();
xml.open("GET", link);
xml.onload = function () {
    if (xml.readyState === 4 && xml.status === 200) {
        let json = JSON.parse(xml.response)
        let user = json;
        user.forEach(display => {
            let block = document.createElement("div")
            block.innerHTML = `<img src=${display.image} /> <p>${display.price}</p> <p>${display.title}</p> `;
            parent.append(block)
        });
    }
    else {
        console.error("Error 404");
    }
};
xml.send();


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });