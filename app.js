const addForm = document.querySelector('.add');
const list = document.querySelector('.todos'); //.todos is the li-class
const search = document.querySelector('.search input');

const postToDo = todo =>{

    if (todo == " "){
        prompt("Enter a to do");
    }

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;
    list.innerHTML += html;
    
};

const filterTodos = term =>{
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .filter((todo) => todo.classList.remove('filtered')); //remove the unmatched word through filtered css
};

//Searching todos
search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo =addForm.add.value.trim(); //Adding trim() method to remove whitespaces in the todo
    console.log(todo);

    //Adding the data recived in the main todo list
    if (todo.length){
    postToDo(todo);   //Length will be 0 for empty values in todo. 0 is falsy value hence postToDo(todo) won't be executed 
    addForm.reset(); //Clearing the form on submit
    }

});

//Deleting todos     
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

