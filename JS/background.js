const images = ["0.jpg", "1.jpg", "2.jpg"];
// img폴더와 같은 이름으로!

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenImage}`; //just string

document.body.append(bgImage);
