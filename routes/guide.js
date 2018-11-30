const Express = require("express");
const path = require("path");

const router = Express.Router();

router.get("/:raid", (req, res) => {
    clearRequireCache("./guideMap.json");
    const guideMap = require("./guideMap.json");
    let guideFile;
    if(guideFile = guideMap[req.params.raid]) {
        res.sendFile(path.join(__dirname, "/../public/html/", guideFile));
    }
    else {
        res.send("That guide doesn't currently exist. Maybe next time.");
    }
});

module.exports = router;

function clearRequireCache(path) {
    delete require.cache[require.resolve(path)];
}
