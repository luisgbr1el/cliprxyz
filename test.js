const cliprxyz = require("./index")

cliprxyz.downloadClip("https://clips.twitch.tv/FlaccidCrazyGarbageChocolateRain-GtFF88upaJ783v1m").then(res => {
    console.log(res)
}).catch(err => {
    console.log(err);
});
