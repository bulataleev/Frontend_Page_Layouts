var add =document.getElementById('add');
var removeTODO = document.getElementById('removeTODO');
var list = document.getElementById('list');
//removing all elements
removeTODO.onclick = function(){
    list.innerHTML = ''; 
}
//adding element
add.onclick = function(){
    addlist(list);
    document.getElementById('userInput').value='';
    document.getElementById('userInput').focus();
}
function addlist(targetUL){
    var inputText=document.getElementById('userInput').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement('button');
    if(inputText !== ''){
        removeButton.className = 'btn btn-xs btn-danger';
        removeButton.innerHTML = '&times; ';
        removeButton.setAttribute('onClick', 'removeMe(this)');
        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUL.appendChild(li);
    }else{
        alert("Eneter a todo");
    }
}
function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p); 
}//figure out why not working&&








