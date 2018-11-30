const Express = require("express");
const path = require("path");

const guideRouter = require("./routes/guide.js");

const app = Express();
app.use("/public", Express.static("./public"));

app.use("/guide", guideRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/html/Home.html"));
});

app.listen(8000, () => { console.log("Ready to go!"); });
