
const textArea = document.getElementById('text');
const charCount = document.getElementById('count');
const submitButton = document.getElementById('submit');
const warningText = document.getElementById('warning')


textArea.addEventListener('input', (e) => {
    const currentLength = textArea.value.length;
    charCount.textContent = currentLength;

    if (currentLength > 100) {
        textArea.classList.add('error');
        charCount.classList.add('error');
        submitButton.disabled = true;
        warningText.textContent = "You reached max length";
    } else {
        textArea.classList.remove('error');
        charCount.classList.remove('error');
        submitButton.disabled = false;
        warningText.textContent = "";
    }
})


