const newitem = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// generating an html template with the user's text inside it
const generateTemplate = (todo) => {
const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
</li>
`;
// adding that template to the ul element in html 
list.innerHTML += html
}

// getting the value from the user typing 
newitem.addEventListener('submit', e => {
    e.preventDefault();
    /* .trim() removes spaces before and after */
    const todo = newitem.add.value.trim();

// checking to make sure something is typed in, if value is 1 == true, if 0 ==  false 
    if (todo.length) {
        generateTemplate(todo);
        /* making the form blank after you add the thing */
        newitem.reset();
    }
    
});
// attactch an event listener to the whole ul instead of each trash can, makes it more efficient 
// delete todos 
list.addEventListener('click', e => {
    //contains() checks if that method contains what was written in ('')
if(e.target.classList.contains('delete'))
e.target.parentElement.remove();
});
list.addEventListener('click', e => {
    //contains() checks if that method contains what was written in ('')
if(e.target.classList.contains('mark'))
e.target.parentElement.classList('important');
});
// event listener to the list, when we clikck on the list it checks if the clicked item contains delete
// if it contains delete, it removes the parent element of the clicked item. 

// keyup event for searchbar 
search.addEventListener('keyup', () => {
const term = search.value.trim().toLowerCase();
filterTodos(term)
});
// filter the todos using the filter array function 
const filterTodos = (term) => {
    // first convert the html elements into an array 
    Array.from(list.children)
    .filter((todo) =>!todo.textContent.toLowerCase().includes(term))
        //Give the opposite with the ! in front of the method
        .forEach((todo) => todo.classList.add('filtered'))
        
        // gather all the items that DONT match the search term 
    
        // remove class when it does not match
        Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        
            .forEach((todo) => todo.classList.remove('filtered'))
};