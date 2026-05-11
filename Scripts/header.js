// Desktop Navigation
const homeBtn = document.querySelectorAll('.js-home');
const servicesBtn = document.querySelectorAll('.js-services');
const galleryBtn = document.querySelectorAll('.js-gallery');
const aboutBtn = document.querySelectorAll('.js-about');
const contactBtn = document.querySelectorAll('.js-contact');
const quoteBtn = document.querySelectorAll('.js-quote-btn');

// Sections
const homeSection = document.querySelector('.home-page');
const servicesSection = document.querySelector('.our-services-section');
const gallerySection = document.querySelector('.our-work-section');
const aboutSection = document.querySelector('.about-section');
const contactSection = document.querySelector('.contact-section');

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.js-mobile-menu');
const closeBtn = document.querySelector('.js-close-btn');

// Open mobile menu
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

// Close mobile menu
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Function for smooth scroll
function scrollToSection(section){
  section.scrollIntoView({
    behavior: 'smooth'
  });

  mobileMenu.classList.remove('active');
}

// Home
homeBtn.forEach((button) => {
  button.addEventListener('click', () => {
    scrollToSection(homeSection);
  });
});

// Services
servicesBtn.forEach((button) => {
  button.addEventListener('click', () => {
    scrollToSection(servicesSection);
  });
});

// Gallery
galleryBtn.forEach((button) => {
  button.addEventListener('click', () => {
    scrollToSection(gallerySection);
  });
});

// About
aboutBtn.forEach((button) => {
  button.addEventListener('click', () => {
    scrollToSection(aboutSection);
  });
});

// Contact
contactBtn.forEach((button) => {
  button.addEventListener('click', () => {
    scrollToSection(contactSection);
  });
});

// Quote Button
quoteBtn.forEach((button) => {
  button.addEventListener('click', () => {
    scrollToSection(contactSection);
  });
});



// Get Quote Buttons
const quoteButtons = document.querySelectorAll(
  '.js-quote-btn, .quote-button-two'
);

// Scroll to contact section when clicked
quoteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    contactSection.scrollIntoView({
      behavior: 'smooth'
    });

    mobileMenu.classList.remove('active');
  });
});