function createTable() {
    let rn = prompt('Input number of rows');
    let cn = prompt('Input number of columns');

    let table = document.getElementById('myTable');

    // Clear out the existing table data
    table.innerHTML = "";

    for(let i=0; i<parseInt(rn, 10); i++) {
        let row = document.createElement('tr');

        for(let j=0; j<parseInt(cn, 10); j++) {
            let cell = document.createElement('td');
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}