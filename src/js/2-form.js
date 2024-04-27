const form = document.querySelector('form.feedback-form');

function loadFormData() {
  const data = localStorage.getItem('feedback-form-state');
  if (!data) return;

  const { email, message } = JSON.parse(data);
  form.elements.email.value = email;
  form.elements.message.value = message;
}

function saveFormData() {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleFormSubmission(event) {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert('Please fill out all fields!');
    return;
  }

  console.log({ email: emailValue, message: messageValue });

  localStorage.removeItem('feedback-form-state');
  form.reset();
}

window.addEventListener('load', loadFormData);
form.addEventListener('input', saveFormData);
form.addEventListener('submit', handleFormSubmission);
