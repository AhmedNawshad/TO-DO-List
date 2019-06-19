var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var newList = document.createElement('li');

        newList.className = "list-group-item";

        newList.appendChild(document.createTextNode(newItem));
   
    var deleteBtn = document.createElement('button');

        deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
        deleteBtn.appendChild(document.createTextNode('X'));

        newList.appendChild(deleteBtn);
        itemList.appendChild(newList);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var list = e.target.parentElement;
            itemList.removeChild(list);
        }
    }
}