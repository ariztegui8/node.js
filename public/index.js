const form = document.getElementById('form');
const title = document.getElementById('title');
const message = document.getElementById('message');
const contenedor = document.getElementById('contenedor');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let titulo = title.value;
    let mensaje = message.value;
    
    const newMessage = document.createElement('div');
    newMessage.classList.add('box-message');
    const newTitle = document.createElement('h3');
    newTitle.textContent = titulo;
    const newParrafo = document.createElement('p');
    newParrafo.textContent = mensaje;
    const divBtn = document.createElement('div');
    divBtn.classList.add('box-btn');
    const editBtn = document.createElement('button');
    editBtn.classList.add('box-message-btn');
    editBtn.textContent = 'Editar';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('box-message-btn');
    deleteBtn.textContent = 'Borrar';

    if(titulo.trim() == '' || mensaje.trim() == ''){
        const error = document.createElement('p');
        // editBtn.classList.add('box-message-btn');
        error.textContent = 'Por favor completa todos los campos';
        form.appendChild(error)
        setTimeout(() => {
            error.remove();
        }, 3000);
        return
    }
    

    divBtn.appendChild(editBtn);
    divBtn.appendChild(deleteBtn);

    newMessage.appendChild(newTitle);
    newMessage.appendChild(newParrafo);
    newMessage.appendChild(divBtn);
    contenedor.appendChild(newMessage);

    title.value = '';
    message.value = '';
});
