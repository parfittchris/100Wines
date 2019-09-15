let getTastingNotes = debounce(function (e) {
    console.log('its working now')
    //get wine id from the target of mouseover event
    let id = parseInt(e.dataset.id)

    //set the location for where note info will be displayed
    let noteOutput = document.getElementById('note-info')

    // API request is made by substituting specific wine id into provided url string
    let requestUrl = 'http://top-100-example.s3.amazonaws.com/' + id + '.json'
    return fetch(requestUrl, {mode: 'cors'}).then(response => {
        return response.json();
    })
    .then(notes => {
        noteOutput.innerHTML = notes.note
    });
}, 250);

// Debounce function that calls getTastingNotes at most once every 250ms
function debounce(func, wait, immediate) {
    var timeout;
    console.log('working?')
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};