import _ from 'lodash';

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

    wineJson.forEach(wine => {
        ids.push(wine.id);
        let wineRow = table.insertRow();
        wineRow.setAttribute('onmouseover', 'getTastingNotes(this)')
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
