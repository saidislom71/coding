// 1-misol
const table = document.getElementById('table')

const li = document.createElement('li')
li.textContent = 'Ikkinchi element'

table.appendChild(li);

// 2-misol
function check(){
    const num = document.getElementById('input').value
    const res = document.getElementById('res')

    if (num==''){
        res.textContent  = ''
        return
    }
    if(num%2==0){
        res.textContent = 'JUFT'
    }
    else{
        res.textContent = 'TOQ'
    }
}

// 3-misol
function changeColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}

// 4-misol
function showtext(){
    const val = document.getElementById('txt').value;
    document.getElementById('out').textContent = val;  
}