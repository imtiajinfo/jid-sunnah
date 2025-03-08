
document.querySelectorAll('.btn-toggle .btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelector('.btn-toggle .btn.active').classList.remove('active');
        this.classList.add('active');
    });
});


// JavaScript to handle modal image display
document.addEventListener("DOMContentLoaded", function () {
    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    imageModal.addEventListener("show.bs.modal", function (event) {
        const button = event.relatedTarget; // Button that triggered the modal
        const imageUrl = button.getAttribute("data-bs-image"); // Extract image URL
        modalImage.src = imageUrl; // Set the image source
    });
});


$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('#content').toggleClass('active');
    });
  
    // Fade-in animation on scroll
    const fadeIns = document.querySelectorAll('.fade-in');
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    fadeIns.forEach(fadeIn => {
      appearOnScroll.observe(fadeIn);
    });
  });
  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('#content').toggleClass('active');
    });
  
    // Fade-in animation on scroll
    const fadeIns = document.querySelectorAll('.fade-in');
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    fadeIns.forEach(fadeIn => {
      appearOnScroll.observe(fadeIn);
    });
  });




  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.boxed-section');
    boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(boxPosition < screenPosition) {
            box.style.opacity = '1';
        }
    });
});


function validateForm() {
  const form = document.getElementById('contactForm');
  const inputs = form.querySelectorAll('input, textarea');
  for (let input of inputs) {
      if (!input.value.trim()) {
          alert('Please fill all fields.');
          return false;
      }
  }
  return true;
}


