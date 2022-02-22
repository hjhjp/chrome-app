const images = [ "0.png", "1.png", "2.png" ]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

// appendChild = 자식요소 추가
document.body.appendChild(bgImage); 

