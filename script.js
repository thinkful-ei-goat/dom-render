window.addEventListener('DOMContentLoaded', main);
const list = [{firstName:'Jo', lastName:'Blo'}];

function main() {
    const deleteBtn = document.querySelector('#deletedItem');
    const ul = document.querySelector('ul');
    const form = document.querySelector('form');

    deleteBtn.addEventListener('click', (evt) => {
        console.log('button clicked', evt.target.parentNode)
        let parentLi = evt.target.parentNode;
        ul.removeChild(parentLi);
    })

    form.addEventListener('submit', evt => {
        evt.preventDefault();  //prevents page refresh on form submission
        let formData = new FormData(evt.target);
        let person = {
            firstName: formData.get('fname'),
            lastName: formData.get('lname')
        };
        if(person.firstName !=='' && person.lastName!=='' ){
            list.push(person);
            render(); //Render method called to view updates to list
        }
        else{
            document.querySelector('.alert-danger').classList.remove('hidden')
        }

    })
    function generateTemplate(){
            let template = [];
            for(let name of list){
                template.push(`<div><strong>${name.firstName} ${name.lastName}</strong></div>`);
            }
            console.log(template)
            return template;
    }

    function render(){
        const resultsDiv = document.querySelector('.results');
        let html = generateTemplate();
        resultsDiv.innerHTML = html.join('');
}
render();  //Render method called on load of page to render anything currently in our list
    


}