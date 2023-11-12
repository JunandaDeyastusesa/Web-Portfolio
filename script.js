// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Show or hide "Go to Top" button on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var goToTopBtn = document.getElementById("goToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
}

// Scroll to the top when "Go to Top" button is clicked
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Image slideshow
var images = [
  "./asset/Fotosaya.png",
  "./asset/Fotosaya2.png",
  "./asset/Azizah.png",
  /* Add more image paths as needed */
];
var index = 0,
  changeImages;
changeImages = function () {
  index = (index + 1) % images.length;
  document.getElementById("photo").style.backgroundImage = "url(" + images[index] + ")";
};
changeImages();
setInterval(changeImages, 500);

function toggleMenu() {
    var menuSmall = document.querySelector('.menu-small');
    menuSmall.style.display = (menuSmall.style.display === 'block') ? 'none' : 'block';
}