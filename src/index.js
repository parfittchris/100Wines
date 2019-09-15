import _ from 'lodash';
    // These functions run when the page is loaded

    // Set table to a variable to later append rows
    // Manually create header row with necessary titles

    let wineJson = require('../docs/wines.json')
    let table = document.getElementById('wine-table')
    let headRow = table.insertRow()
    let ids = [];
    headRow.innerHTML = `
        <tr class='table-header'>
            <th>Score</th>
            <th>Winery</th>
            <th>Wine</th>
            <th>Vintage</th>
            <th>Color</th>
            <th>Region</th>
        </tr>`

    //Loops through wines.json and create/append a new row to the table for each entry

    wineJson.forEach(wine => {
        ids.push(wine.id);
        let wineRow = table.insertRow();
        wineRow.setAttribute('onmouseenter', 'getTastingNotes(this)')
        wineRow.setAttribute('data-id', `${wine.id}`)

        wineRow.innerHTML = `
                <td>${wine.score}</td>
                <td>${wine.winery_full}</td>
                <td>${wine.wine_full}</td>
                <td>${wine.vintage}</td>
                <td>${wine.color}</td>
                <td>${wine.region}</td>
            `
    });

    