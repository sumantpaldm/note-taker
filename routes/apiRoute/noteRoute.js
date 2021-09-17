const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const database = require("../../data/db.json");

const { createData, validateData,} = require("../../lib/note");


// get request handler
router.get("/notes", (req, res) => {
    let outcome = database;
    console.log(outcome);
    return res.json(outcome);
});

//post request handler
router.post("/notes", (req, res) => {
    if (!validateData(req.body)) {
        res.status(400).send("The notes is not valid.");
    } else {
        const newNote = createData(req.body, database);
        return res.json(newNote);
    }
});



module.exports = router;
