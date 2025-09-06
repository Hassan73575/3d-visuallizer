function openImage(img) {
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}