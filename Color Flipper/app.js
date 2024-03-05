const color = ["green", "red","rgba(133,122,200)"]

const btn = document.getElementById("btn")
const colorName = document.querySelector(".color")

btn.addEventListener("click", function(){
    console.log("clicked")
    const randomNumber = RandomNumber()
    document.body.style.backgroundColor = color[randomNumber]
    colorName.textContent = color[randomNumber]
})

function RandomNumber(){
    return Math.floor(Math.random() * color.length)
}


