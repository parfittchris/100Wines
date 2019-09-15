let getTastingNotes = debounce(function (e) {
    let id = parseInt(e.dataset.id)
    let noteOutput = document.getElementById('note-info')
    let requestUrl = 'http://top-100-example.s3.amazonaws.com/' + id + '.json'
    return fetch(requestUrl, {mode: 'cors'}).then(response => {
        return response.json();
    })
    .then(notes => {
        noteOutput.innerHTML = notes.note
    });
}, 250);


function debounce(func, wait, immediate) {
    var timeout;
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