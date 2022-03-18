const favColorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')


favColorBtn.addEventListener('click', ()=>{
    alert('Seafoam Green')
    favColorBtn.style.backgroundColor ='#93E9BE';
})

placeBtn.addEventListener('click', ()=>{
    alert('my house')
    placeBtn.style.backgroundColor ='blue'
    placeBtn.style.color = 'white'
})

ritualBtn.addEventListener('click', ()=>{
    alert('brushing my cats')
    ritualBtn.style.backgroundColor ='yellow'
})


let cBtn =document.querySelector('button')
    cBtn.classList.add('yellow')
let pBtn =document.querySelector('button')
    pBtn.classList.add('yellow')
let rBtn =document.querySelector('button')
    rBtn.classList.add('yellow')