
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}


document.addEventListener('DOMContentLoaded', () => {
  // Ensure the page starts at the top
  window.scrollTo(0, 0);

  const preloader = document.querySelector('.preloader');
  const mainPage = document.querySelector('.page-wrapper');
  const body = document.body;

  // Initially hide the main page and disable body scrolling
  mainPage.style.visibility = 'hidden';
  body.style.overflow = 'hidden';

  // Handle preloader animation and visibility
  setTimeout(() => {
    preloader.style.opacity = 0; // Fade out animation
    preloader.style.display = 'none'; // Remove preloader from display
    mainPage.style.visibility = 'visible'; // Show main content
    body.style.overflow = ''; // Re-enable scrolling
  }, 4000); // Matches animation duration (4 seconds)
});
