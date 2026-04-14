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
