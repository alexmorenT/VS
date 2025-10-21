

let reintegroNum = Math.trunc(Math.random() * 9)

let parrafo = document.getElementById("mensaje")

let text = ""
text += "Números: "

let ar = new Array(6)

for (let index = 0; index < ar.length; index++) {
    let randomNum = Math.trunc(Math.random() * 49)
    ar[index] = randomNum;
}

for (let j = 0; j < ar.length; j++) {
    text += "<strong>" + ar[j] + " " + "</strong>"
}

text += "<br> Reintegro: " + "<strong>" + reintegroNum + "</strong>"

parrafo.innerHTML = text

console.log(randomNum)
console.log(reintegroNum)