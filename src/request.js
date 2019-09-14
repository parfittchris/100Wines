function getTastingNotes(e) {
    let id = parseInt(e.dataset.id)
    let noteOutput = document.getElementById('note-info')
    let requestUrl = 'http://top-100-example.s3.amazonaws.com/' + id + '.json'
    return fetch(requestUrl, {mode: 'cors'}).then(response => {
        return response.json();
    })
    .then(notes => {
        noteOutput.innerHTML = notes.note
    });
}


