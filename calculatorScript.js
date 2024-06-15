var display = document.getElementById("display")
var Ac = document.getElementById("AC")
var De = document.getElementById("DE")
var dot = document.getElementById("dot")
var division = document.getElementById("division")
var nine = document.getElementById("nine")
var eight = document.getElementById("eight")
var seven = document.getElementById("seven")
var multi = document.getElementById("multi")
var six = document.getElementById("six")
var five = document.getElementById("five")
var four = document.getElementById("four")
var sups = document.getElementById("sups")
var three = document.getElementById("three")
var two = document.getElementById("two")
var one = document.getElementById("one")
var add = document.getElementById("add")
var modulo = document.getElementById("modulo")
var zero = document.getElementById("zero")
var equal = document.getElementById("equal")

Ac.addEventListener('click',()=>{
  display.value = ''
})
De.addEventListener('click',()=>{
  display.value = display.value.toString().slice(0,-1);
})
dot.addEventListener('click',()=>{
  display.value += '.'
})
division.addEventListener('click',()=>{
  display.value += '/'
})
nine.addEventListener('click',()=>{
  display.value += '9'
})
eight.addEventListener('click',()=>{
  display.value += '8'
})
seven.addEventListener('click',()=>{
  display.value += '7'
})
multi.addEventListener('click',()=>{
  display.value += '*'
})
six.addEventListener('click',()=>{
  display.value += '6'
})
five.addEventListener('click',()=>{
  display.value += '5'
})
four.addEventListener('click',()=>{
  display.value += '4'
})
sups.addEventListener('click',()=>{
  display.value += '-'
})
three.addEventListener('click',()=>{
  display.value += '3'
})
two.addEventListener('click',()=>{
  display.value += '2'
})
one.addEventListener('click',()=>{
  display.value += '1'
})
add.addEventListener('click',()=>{
  display.value += '+'
})
modulo.addEventListener('click',()=>{
  display.value += '%'
})
zero.addEventListener('click',()=>{
  display.value += '0'
})
equal.addEventListener('click',()=>{
  display.value = eval(display.value)
})