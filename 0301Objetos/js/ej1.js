
// 1 

let diasemana = new Date()
let p1 = document.getElementById("mensaje1")
p1.innerHTML = "Día de la semana: " + "<strong>" + diasemana.getDay() + "</strong>"


// 2

let diames = new Date()
let p2 = document.getElementById("mensaje2")
p2.innerHTML = "Día del mes: " + "<strong>" + diames.getDate() + "</strong>"

// 3
let mes = new Date()
let p3 = document.getElementById("mensaje3")
p3.innerHTML = "Mes: " + "<strong>" + mes.getMonth() + "</strong>"


// 4

let anyo = new Date()
let p4 = document.getElementById("mensaje4")
p4.innerHTML = "Año: " + "<strong>" + mes.getMonth() + "</strong>"

// 5 

let hora = new Date()
let p5 = document.getElementById("mensaje5")
p5.innerHTML = "Hora: " + "<strong>" + hora.getHours() + "</strong>"

// 6

let minutos = new Date()
let p6 = document.getElementById("mensaje6")
p6.innerHTML = "Minutos: " + "<strong>" + minutos.getMinutes() + "</strong>"

// 7

let seg = new Date()
let p7 = document.getElementById("mensaje7")
p7.innerHTML = "Segundos: " + "<strong>" + seg.getSeconds() + "</strong>"

// 8 


let milseg = new Date()
let p8 = document.getElementById("mensaje8")
p8.innerHTML = "Milisegundos: " + "<strong>" + milseg.getMilliseconds() + "</strong>"


// 9


let milseg2 = Date.now()
let p9 = document.getElementById("mensaje9")
p9.innerHTML = "Milisegundos desde 01/01/1970: " + "<strong>" + milseg2 + "</strong>"


// 10 

let formatoingles = new Date()
let p10 = document.getElementById("mensaje10")
p10.innerHTML = "Fecha formato en inglés: " + "<strong>" + formatoingles.toDateString() + "</strong>"

// 11

let formatolocal = new Date()
let p11 = document.getElementById("mensaje11")
p11.innerHTML = "Fecha en formato local: " + "<strong>" + formatolocal.toLocaleDateString() + "</strong>"


// 12

let formatolocal2 = new Date()
let p12 = document.getElementById("mensaje12")
p12.innerHTML = "Fecha y hora en formato local: " + "<strong>" + formatolocal.toLocaleDateString() + " " + formatolocal2.toLocaleTimeString() + "</strong>"

// 13


let formatolocal3 = new Date()
let p13 = document.getElementById("mensaje13")
p13.innerHTML = "Hora local: " + "<strong>" + formatolocal3.toLocaleTimeString() + "</strong>"

// 14 

let fechaingles = new Date()
let p14 = document.getElementById("mensaje14")
p14.innerHTML = "Fecha completa en inglés + uso horario: " + "<strong>" + fechaingles + "</strong>"



// 15 


let usohorario = new Date()
let p15 = document.getElementById("mensaje15")
p15.innerHTML = "Hora + uso horario: " + "<strong>" + usohorario.toTimeString() + "</strong>"


// 16 


let difminutos = new Date()
let p16 = document.getElementById("mensaje16")
p16.innerHTML = "Diferencia en minutos entre la hora del equipo local y el valor de UTC: " + "<strong>" + difminutos.getTimezoneOffset() + "</strong>"