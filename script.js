function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const lightboxToggles = document.querySelectorAll('.lightbox-toggle');

  lightboxToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default link behavior
          const targetId = toggle.getAttribute('href').substr(1);
          const lightbox = document.getElementById(targetId);
          lightbox.style.display = 'flex'; // Show the lightbox
      });
  });

  const lightboxes = document.querySelectorAll('.lightbox');

  lightboxes.forEach(lightbox => {
      lightbox.addEventListener('click', () => {
          lightbox.style.display = 'none'; // Hide the lightbox when clicked outside
      });

      const lightboxContent = lightbox.querySelector('.lightbox-content');
      lightboxContent.addEventListener('click', (event) => {
          event.stopPropagation(); // Prevent closing when clicking inside the lightbox content
      });

      const closeBtn = lightbox.querySelector('.lightbox-close');
      closeBtn.addEventListener('click', (event) => {
          event.preventDefault();
          lightbox.style.display = 'none'; // Hide the lightbox on close button click
      });
  });
});