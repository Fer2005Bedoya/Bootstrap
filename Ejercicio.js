import { data } from '../DATA/data.js'

const items = document.getElementById('items');
const templateCard =document.getElementById('template-Card').content;
const fragment =document.createDocumentFragment();
let Like = {};
document.addEventListener('DOMContentLoaded',()=>{
loadData(data)
})

const loadData = data=>{
    data.forEach(Personajes=>{
        const{id,name,IMAGENES}
        templateCard.querySelector('h5').textContent
        templateCard.querySelector('img').setAttribute('src',image);
        templateCard.querySelector('.btn-dark').dataset.id = id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    
}