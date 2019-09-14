function getTastingNotes(e) {
    let id = parseInt(e.dataset.id)
    let requestUrl = 'https://top-100-example.s3.amazonaws.com/' + id + '.json'

    let note = $.getJSON(requestUrl, function (data) {
        return data.note
    })

    console.log(note)
}

