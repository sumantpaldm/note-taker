

const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");


function createData(body, notes) {
    const note = body;
    console.log(note, notes);
    notes.push({ ...note, id: uuidv4() });
    fs.writeFileSync(
        path.join(__dirname, "../data/db.json"),
        JSON.stringify(notes, null, 2)
    );
    return note;
}

function validateData(note) {
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    if (!note.title || typeof note.title !== "string") {
        return false;
    }

    return true;
}




module.exports = { validateData, createData, };
