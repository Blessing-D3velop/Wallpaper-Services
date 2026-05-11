import { servicesData }  from "./services-data.js";

const serviceContainer = document.querySelector('.js-services-container');

const renderServices = (servicesData) =>{
  serviceContainer.innerHTML= '';
  servicesData.forEach(service => {
    let serviceHTML = `
      <div class="service-card">
        <div class="service-image-container">
          <img src="${service.img}">
        </div>
        <div class="service-info-container">
          <p class="services-name">${service.serviceName}</p>
          <p class="services-description">${service.serviceDescription}</p>
        </div>
      </div>
    `
    serviceContainer.innerHTML += serviceHTML;
  });
}
renderServices(servicesData);



// View Our Work Buttons
const viewWorkButtons = document.querySelectorAll('.view-our-work-button');

const gallerySection = document.querySelector('.our-work-section');

viewWorkButtons.forEach((button) => {
  button.addEventListener('click', () => {
    gallerySection.scrollIntoView({
      behavior: 'smooth'
    });

    mobileMenu.classList.remove('active');
  });
});