const contactButton = document.querySelector('.contact-button');

contactButton.addEventListener('click', () => {

  const nameInput = document.querySelector('.contact-form-container input[type="text"]');
  const emailInput = document.querySelector('.contact-form-container input[type="email"]');
  const messageInput = document.querySelector('.contact-form-container textarea');

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if(!name || !email || !message){
    alert('Please fill in all fields');
    return;
  }

  const whatsappMessage =
`Hello Shepard Wallpapers,

Name: ${name}
Email: ${email}

Message:
${message}`;

  const encodedMessage = encodeURIComponent(whatsappMessage);

  window.open(
    `https://wa.me/27743145988?text=${encodedMessage}`,
    '_blank'
  );

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

});