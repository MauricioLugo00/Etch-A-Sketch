document.addEventListener('DOMContentLoaded', () => {
    const divContainer = document.getElementById('divContainer');

    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('divRow');

        for (let j = 0; j < 16; j++) {
            const items = document.createElement('div');
            items.classList.add('divItems');
            row.appendChild(items);
        }

        divContainer.appendChild(row);
    }
});
