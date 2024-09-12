const input = document.querySelector('input');

const lowerCaseStr = document.querySelector('#lowercase span');
const upperCaseStr = document.querySelector('#uppercase span');
const camelCaseStr = document.querySelector('#camelcase span');
const pascalCaseStr = document.querySelector('#pascalcase span');
const snakeCaseStr = document.querySelector('#snakecase span');
const kebabCaseStr = document.querySelector('#kebabcase span');
const trimStr = document.querySelector('#trim span');

function capitalStr(str) {
    if (!str) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1, str.length);
}

function upperCase(str) {
    const lowercaseValue = str.toLowerCase();
    const strArray = lowercaseValue.split(' ');
    const finalArray = strArray.map((words, i) => {
        if (i === 0) {
            return words;
        }
        return capitalStr(words);
    });
    return finalArray.join('');
}

function pascalCase(str) {
    const lowercaseValue = str.toLowerCase();
    const strArray = lowercaseValue.split(' ');
    const finalArray = strArray.map((words, i) => {
        return capitalStr(words);
    });
    return finalArray.join('');
}

function snakeCase(str) {
    return str.replaceAll(' ', '_');
}

function kebabCase(str) {
    return str.replaceAll(' ', '-');
}

function trim(str) {
    return str.replaceAll(' ', '');
}

input.addEventListener('input', () => {
    lowerCaseStr.textContent = input.value.toLowerCase();
    upperCaseStr.textContent = input.value.toUpperCase();
    camelCaseStr.textContent = upperCase(input.value);
    pascalCaseStr.textContent = pascalCase(input.value);
    snakeCaseStr.textContent = snakeCase(input.value);
    kebabCaseStr.textContent = kebabCase(input.value);
    trimStr.textContent = trim(input.value);
});