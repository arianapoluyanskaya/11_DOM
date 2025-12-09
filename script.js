console.log(document)
const div1 = document.getElementById("div1")

console.log(div1)
div1.style.border = "1px solid black"

div1.className = "box"

div1.classList.add("box1")

const div1Query = document.querySelector("#div1")
const pDiv1 = document.querySelectorAll("#div1 > p")

for (const i in pDiv1){
    pDiv1[i].innerHTML = `<span>

    
    ${+i+1}.New text in paragraph
    </span>
    `
}
const newP = document.createElement("p")
newP.textContent = "New element from DOM"
div1.appendChild(newP)

//HA

const t = setInterval(move, 30)
// clearInterval t

const box = document.getElementById("box")
let distance = 0
let flag  = true
let dir = 1

function move(){

  /*  step++
box.style.top = "px"
box.style.left = "px"


if step ===150{
    clearInterval(t)
}

}*/

flag? distance++ : distance--;

if (distance === 150 || distance === 0) {
        //dir *= -1; 
        flag = !flag
    }


box.style.top = distance + "px";
box.style.right = distance + "px";

}