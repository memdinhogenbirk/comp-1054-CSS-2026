// STEP 11: Call to tablesorter script here
document.addEventListener('DOMContentLoaded', function() {
    const consoleTable = document.querySelector('table');
    let sortableTable = new Tablesort(consoleTable);
});