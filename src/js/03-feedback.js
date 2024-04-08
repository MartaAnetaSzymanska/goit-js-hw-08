import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
// przypisuje cały tag input z name ="email"
const email = form.elements.email;
// przypisuje tag, który zawiera name="message"
const message = form.elements.message;

const formDataString = localStorage.getItem('feedback-form-state');
if (formDataString) {
  const formData = JSON.parse(formDataString);
  email.value = formData.email;
  message.value = formData.message;
}

const storedData = ev => {
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};
form.addEventListener('input', throttle(storedData, 500));

form.addEventListener('submit', ev => {
  ev.preventDefault();
  console.log({
    email: ev.target.elements.email.value,
    message: ev.target.elements.message.value,
  });
  localStorage.clear();
  form.reset(0);
});
