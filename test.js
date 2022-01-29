const cliprxyz = require("./index")

cliprxyz.downloadClip("https://clips.twitch.tv/SuaveDistinctLlamaPraiseIt-33EJqtw6dJMDbIIg").then(res => {
    console.log(res)
});