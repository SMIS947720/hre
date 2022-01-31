
//ocultar o mostrar div que contiene la lista
const hide= document.querySelector('#hideElements');
const listDiv= document.querySelector('#list');
// constantes para agregar elementos a la lista
const addItemInput=document.querySelector('#addItem');//intput
const addItemButton=document.querySelector('button#addItemButton');//boton

//eliminar ultimo item
const removeItemButton=document.querySelector('button#removeItemButton');
//eliminar elemento seleccionado
const removeItem=document.querySelector('button#removeItem');





//mostrar y ocultar lista
hide.addEventListener('click',()=>{
    if(listDiv.style.display==='none'){
        listDiv.style.display='block';
        hide.textContent='<<';
    }else{
        listDiv.style.display='none';
        hide.textContent='>>';
    }
});

function addItem(){
    let ul = document.getElementById('ul'); //ul
    let li = document.createElement('li');//li

    let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "todo[]";

    li.appendChild(checkbox);

    let text = document.getElementById('addItem');
    li.appendChild(document.createTextNode(text.value));
    ul.appendChild(li); 
}

let button = document.getElementById('addItemButton');
button.onclick = addItem;





//eliminar ultimo elemento de la lista
removeItemButton.addEventListener('click',()=>{
    let list=document.querySelector('ul');
    let li=document.querySelector('li:last-child');
    list.removeChild(li);
});

function findIndex(elem){
    var i, len = items.length;
    for (i = 0; i < len; i++) {
        if (items[i] === elem) {
            return i;
        }
    }
    return -1;
}


//obtener index of element in list
var list=document.getElementById("listItems"),
    items = list.getElementsByTagName("li");
list.onclick=function(e){
    var event = e || window.event,
    src=event.target || event.srcElement;
    var myIndex=findIndex(src);
    //alerta para confirmar eliminacion
    index=myIndex;
    console.log(myIndex);

    if(event.target.tagName==='LI'){
        list.querySelectorAll('li').forEach(el=>el.classList.remove('alert','alert-success'));
        items[index].classList.add('alert','alert-success');
    }
};

//Eliminar elemento seleccionado
removeItem.addEventListener('click',()=>{
    let showDiv=document.getElementById('list');
    let divAlert=document.createElement('div');
    let label=document.createElement('label');
    label.innerHTML='Se elimino el elemento: '+index;
    divAlert.classList.add('alert','alert-danger');

    items[index].parentNode.removeChild(items[index]);
    divAlert.appendChild(label);
    showDiv.appendChild(divAlert);
});
