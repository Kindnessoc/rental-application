const photos = [
  "images/property-1.png","images/property-2.png","images/property-3.png",
  "images/property-4.png","images/property-5.png","images/property-6.png",
  "images/property-7.png","images/property-8.png","images/property-9.png"
];

let currentPhoto = 0;
const mainPhoto = document.getElementById("main-photo");
const count = document.getElementById("photo-count");
const thumbs = document.getElementById("thumbs");

photos.forEach((src, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = index === 0 ? "active" : "";
  button.onclick = () => showPhoto(index);
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Property photo ${index + 1}`;
  button.appendChild(img);
  thumbs.appendChild(button);
});

function showPhoto(index) {
  currentPhoto = (index + photos.length) % photos.length;
  mainPhoto.src = photos[currentPhoto];
  count.textContent = `${currentPhoto + 1} / ${photos.length}`;
  [...thumbs.children].forEach((b, i) => b.classList.toggle("active", i === currentPhoto));
}
function changePhoto(direction) {
  showPhoto(currentPhoto + direction);
}
