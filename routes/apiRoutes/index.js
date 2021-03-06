const router = require('express').Router();
const createNewNote = require('../../lib/note')
const {notes} = require('../../db/db.json')

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results)
    console.log(results)
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes)
    res.json(note)

})

router.delete('/notes/:id', (req, res) => {

    let note = notes[req.params.id]

    delete note

    
    
})

module.exports = router;