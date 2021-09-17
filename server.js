// declarations
const express = require('express');

//port and express requirements
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Use Routes
app.use("/", htmlRoute);
app.use("/api", apiRoute);


app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});




