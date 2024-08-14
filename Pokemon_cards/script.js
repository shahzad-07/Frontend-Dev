const container = document.querySelector(".container");

let count = 1;
const add = document.querySelector(".addicon");
add.addEventListener("click", () => {
  const image = document.createElement("img");
  image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count++}.png`;
  container.append(image);
});

const sub = document.querySelector(".subicon");
sub.addEventListener("click", () => {
  const images = container.querySelectorAll("img");
  if (images.length > 0) {
    const lastImage = images[images.length - 1];
    lastImage.remove();
    count--;
  }
});
