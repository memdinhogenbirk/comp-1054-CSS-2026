// STEP 11: Call to tablesorter script here
document.addEventListener('DOMContentLoaded', function() {
    const consoleTable = document.querySelector('table');
    let sortableTable = new Tablesort(consoleTable);
    /*my own custom javascript to color backgrounds of the selected column when sorted*/
    const columnHeaders = consoleTable.querySelectorAll('th');
    const columns = consoleTable.querySelectorAll('colgroup col');
    columnHeaders.forEach(header => {
        header.addEventListener('click', function() {
            /*cell index super helpful, get's index of the header cell in the row of headers
            Thank you mozilla https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement/cellIndex*/
            currentIndex = header.cellIndex;
            columns.forEach((col, index) => {
                if (index === currentIndex) {
                    col.classList.add('active');
                } else {
                    col.classList.remove('active');
                }
            });
        });
    });
});