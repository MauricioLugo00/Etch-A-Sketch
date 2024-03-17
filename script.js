const divContainer = document.getElementById('divContainer');
const button = document.getElementById('myButton');

let size = 16;

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('divRows');

    for (let j = 0; j < 16; j++) {
        const items = document.createElement('div');
        items.classList.add('divItems');
        row.appendChild(items);

        items.addEventListener('mouseenter', () => {
            items.style.backgroundColor = 'red'
        })

        divContainer.addEventListener('mouseleave', () => {
            items.style.backgroundColor = '';
        })
    }

    divContainer.appendChild(row);
   
}

button.addEventListener('click', () => {
    textIn = prompt('Type a new size (1 - 100): ');
    newSize = parseInt(textIn);

    if (!isNaN(newSize) && newSize >= 1 && newSize <=100) {
        size = newSize;

        while (divContainer.firstChild) {
            divContainer.removeChild(divContainer.firstChild);
        }

        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.classList.add('divRows');
        
            for (let j = 0; j < size; j++) {
                const items = document.createElement('div');
                items.classList.add('divItems');
                row.appendChild(items);
        
                items.addEventListener('mouseenter', () => {
                    items.style.backgroundColor = 'blue'
                })
        
                divContainer.addEventListener('mouseleave', () => {
                    items.style.backgroundColor = '';
                })
            }
        
            divContainer.appendChild(row);
        }
    } else {
        alert('Type a valid number(1 - 100)!!')  
    }

});

/*By Mauricio Lugo*/