function addItem(){
    var ul = document.getElementById('ul'); //ul
    var li = document.createElement('li');//li
    
    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "todo[]";
    
    li.appendChild(checkbox);
    
    var text = document.getElementById('texto');
    li.appendChild(document.createTextNode(text.value));
    ul.appendChild(li); 
}
var button = document.getElementById('btn');
button.onclick = addItem 