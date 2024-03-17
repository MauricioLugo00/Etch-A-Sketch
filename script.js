document.addEventListener('DOMContentLoaded', () => {
    const divContainer = document.getElementById('divContainer');
    const button = document.getElementById('button');

    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('divRow');

        for (let j = 0; j < 16; j++) {
            const columns = document.createElement('div');
            columns.classList.add('divItems');
            row.appendChild(columns);

            columns.addEventListener('mouseenter', () => {
                columns.style.backgroundColor = 'blue';
            });

            columns.addEventListener('mouseleave', () => {
                columns.style.backgroundColor = '';
            })

        }

        divContainer.appendChild(row);
    }

    let size = 16;

    button.addEventListener('click', () => {
        let input = prompt('Type a new size(1 - 100):');
        let newSize = parseInt(input);
    
        if (!isNaN(newSize) && newSize >= 1 && newSize <= 100) {
            size = newSize;
    
            while (divContainer.firstChild) {
                divContainer.removeChild(divContainer.firstChild);
            }
    
            for (let i = 0; i < size; i++) {
                const row = document.createElement('div');
                row.classList.add('divRow');
    
                for (let j = 0; j < size; j++) {
                    const columns = document.createElement('div');
                    columns.classList.add('divItems');
                    row.appendChild(columns);
    
                    columns.addEventListener('mouseenter', () => {
                        columns.style.backgroundColor = 'blue';
                    });
    
                    columns.addEventListener('mouseleave', () => {
                        columns.style.backgroundColor = '';
                    });
                }
    
                divContainer.appendChild(row);
            }
    
            const gridSize = size * 30; 
            divContainer.style.width = gridSize + 'px';
        } else {
            alert('Type a valid number of 1 to 100.');
        }
    });
    
    
});

/*LISTO*/




