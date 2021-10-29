// Variables
const resultColor = document.querySelector('.result-color')

const slideRed = document.querySelector('#slideRed')
const slideGreen = document.querySelector('#slideGreen')
const slideBlue = document.querySelector('#slideBlue')

const valRed = document.querySelector('#valRed')
const valGreen = document.querySelector('#valGreen')
const valBlue = document.querySelector('#valBlue')

// change box color
const changeRGB = () => {
    resultColor.style.backgroundColor = `rgb(${slideRed.value}, ${slideGreen.value}, ${slideBlue.value})`
    resultColor.textContent = `rgb(${slideRed.value}, ${slideGreen.value}, ${slideBlue.value})`
    valRed.textContent = slideRed.value
    valGreen.textContent = slideGreen.value
    valBlue.textContent = slideBlue.value
}

// reloading the page
window.addEventListener("load", changeRGB);