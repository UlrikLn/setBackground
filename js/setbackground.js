console.log("jeg er i setbackground")

const inpColor = document.querySelector(".inpColor")
console.log(inpColor)

const pbCol = document.querySelector(".pbSetColor");
console.log(pbCol)

const inpColorValue = document.querySelector(".inpColorValue");
console.log(inpColorValue)

const inpColorPicker = document.getElementById("inpColorPicker")

pbCol.textContent = "Tryk mig for set color";

const bdy = document.querySelector("body");
console.log(bdy);

function setBackgroundColor()
{
    let col = inpColor.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function useColorPicker()
{
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

const pTags = document.getElementsByTagName('p')
console.log(pTags);

const pArray = Array.from(pTags)
console.log(pArray)

pArray.forEach(increaseFont);

function increaseFont(element)
{
    let fontSize = element.style.fontSize;
    console.log("fsize=" + fontSize);
    element.style.fontSize = 20 + 'px';
    fontSize = element.style.fontSize;
    console.log("fsize=" + fontSize);
}

pbCol.addEventListener('click',setBackgroundColor)
document.addEventListener('keyup', setBackgroundColor)
inpColorPicker.addEventListener('input', useColorPicker)