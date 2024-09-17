const liveInputField = document.getElementById('liveInputField');
const liveText = document.getElementById('liveText');

const savedText = localStorage.getItem('liveInput');
if (savedText) {
    liveInputField.value = savedText;
    liveText.textContent = savedText;
}

liveInputField.addEventListener('input', function () {
    const currentValue = liveInputField.value;
    liveText.textContent = currentValue;
    localStorage.setItem('liveInput', currentValue);
});