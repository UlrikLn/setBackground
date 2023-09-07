console.log("jeg er i ddcolor.js")

const colArray = ["red", "green", "yellow", "blue", "orange"]

const pbFillDropdown = document.getElementById("pbFillDropdown")
const ddColors = document.getElementById("ddColors")
const bdy = document.querySelector("body")



function fillDropdown(item){
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item
    ddColors.appendChild(el);
}

function setBackgroundColor(){
    const selindex = ddColors.selectedIndex;
    const selectedColor = ddColors.options[selindex];
    const color = selectedColor.innerText;
    bdy.style.backgroundColor = color;
    console.log(selindex)
}

function addColor(btn){
    ddColors.innerHTML = ""
    colArray.forEach(fillDropdown)
    console.log(document.all)
}

pbFillDropdown.addEventListener('click', addColor)
ddColors.addEventListener('change', setBackgroundColor)