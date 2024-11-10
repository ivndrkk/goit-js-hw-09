const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

window.addEventListener('load', event => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email;
        formData.message = parsedData.message;
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.clear();
        formData.email = "";
        formData.message = "";
        form.elements.email.value = null;
        form.elements.message.value = null;
    }
})
