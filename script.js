const form = document.querySelector('form');
const input = document.querySelector('input');
const result = document.querySelector('h3');

const stringFormatter = str => {
    let resultOutput = "";
    for (let i = 0; i < str.length; i++) {
        resultOutput += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
        if (i < str.length - 1) {
            resultOutput += '-';
        }
    }
    return resultOutput;
}

form.addEventListener('input', function (event) {
    event.preventDefault();
    const inputValue = input.value;
    const formattedString = stringFormatter(inputValue);
    result.textContent = formattedString;
});
