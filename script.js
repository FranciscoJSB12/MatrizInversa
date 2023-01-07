const in1 = document.getElementById('in1')
const in2 = document.getElementById('in2')
const in3 = document.getElementById('in3')
const in4 = document.getElementById('in4')
const in5 = document.getElementById('in5')
const in6 = document.getElementById('in6')
const in7 = document.getElementById('in7')
const in8 = document.getElementById('in8')
const in9 = document.getElementById('in9')
const btn = document.getElementById('btn')

const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')
const c4 = document.getElementById('c4')
const c5 = document.getElementById('c5')
const c6 = document.getElementById('c6')
const c7 = document.getElementById('c7')
const c8 = document.getElementById('c8')
const c9 = document.getElementById('c9')

let a
let b
let c 
let d 
let e 
let f
let g
let h
let i
let det
let mt = [[],[],[]]
let mi = [[],[],[]]

function calcular () {
    a = parseFloat(in1.value)
    b = parseFloat(in2.value)
    c = parseFloat(in3.value)

    d = parseFloat(in4.value)
    e = parseFloat(in5.value)
    f = parseFloat(in6.value)

    g = parseFloat(in7.value)
    h = parseFloat(in8.value)
    i = parseFloat(in9.value)
    
    det = (a*e*i +b*f*g +d*h*c)-(c*e*g +f*h*a +b*d*i)
    if(det != 0) {
        mt[0][0] = a
        mt[0][1] = d
        mt[0][2] = g
        mt[1][0] = b
        mt[1][1] = e
        mt[1][2] = h
        mt[2][0] = c
        mt[2][1] = f
        mt[2][2] = i

        mi[0][0] = (mt[1][1]*mt[2][2]-mt[2][1]*mt[1][2])/det
        mi[0][1] = -(mt[1][0]*mt[2][2]-mt[2][0]*mt[1][2])/det
        mi[0][2] = (mt[1][0]*mt[2][1]-mt[2][0]*mt[1][1])/det
        mi[1][0] = -(mt[0][1]*mt[2][2]-mt[2][1]*mt[0][2])/det
        mi[1][1] = (mt[0][0]*mt[2][2]-mt[2][0]*mt[0][2])/det
        mi[1][2] = -(mt[0][0]*mt[2][1]-mt[2][0]*mt[0][1])/det
        mi[2][0] = (mt[0][1]*mt[1][2]-mt[1][1]*mt[0][2])/det
        mi[2][1] = -(mt[0][0]*mt[1][2]-mt[1][0]*mt[0][2])/det
        mi[2][2] = (mt[0][0]*mt[1][1]-mt[1][0]*mt[0][1])/det
        imprimir()
    }else {
        alert('Esta matriz no tiene inversa')
    }
}
function imprimir() {
    c1.innerText = `${mi[0][0].toFixed(3)}`
    c2.innerText = `${mi[0][1].toFixed(3)}`
    c3.innerText = `${mi[0][2].toFixed(3)}`

    c4.innerText = `${mi[1][0].toFixed(3)}`
    c5.innerText = `${mi[1][1].toFixed(3)}`
    c6.innerText = `${mi[1][2].toFixed(3)}`

    c7.innerText = `${mi[2][0].toFixed(3)}`
    c8.innerText = `${mi[2][1].toFixed(3)}`
    c9.innerText = `${mi[2][2].toFixed(3)}`
}
btn.addEventListener('click', calcular)



