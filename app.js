const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.post("/submit-form", (req, res) => {
    const username = req.body.username;
    res.send(`Username is $sselvam`);
});

app.listen(port, () => {
    console.log(`The server running on http://localhost:${port}`);
});
