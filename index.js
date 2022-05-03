const request = require("request"),
  cheerio = require("cheerio");

exports.downloadClip = function (query, offset) {

  let clipId = '';
  if (query.includes("https://clips.twitch.tv/")) {
    clipId = query.replace("https://clips.twitch.tv/", "");
  } else if (query.includes("https://www.twitch.tv/") && query.includes("/clip/")){
    clipId = query.replace("https://www.twitch.tv/", "");
  }
  
  return new Promise(function (resolve, reject) {
    request("https://clipr.xyz/" + clipId, function (error, response, body) {
      if (error) {
        reject(Error(error));
      } else {
        var $ = cheerio.load(body, {
          xml: {
            normalizeWhitespace: true,
            decodeEntities: true, // Decode HTML entities.
            withStartIndices: false, // Add a `startIndex` property to nodes.
            withEndIndices: false, // Add an `endIndex` property to nodes.
          },
        });

        var creator = [];
        $("span.font-semibold").each(function (index, element) {
          creator.push($(element).text());
        });

        const creatorUsername = creator[0],
          creatorUrl = `https://twitch.tv/${creator[0]}`;
        (creatorWasPlaying = creator[1]), (clippedOn = creator[2].replace(" ", ''));

        var clip = [];
        $(".flex-shrink-0 a.inline-flex").each(function (index, element) {
          clip.push($(element).attr("href"));
        });

        var clipNameRaw = [];
        $("h2.max-w-2xl").each(function (index, element) {
          clipNameRaw.push($(element).text());
        });
        var issueDetector = [];
        $("p.text-sm").each(function (index, element) {
          issueDetector.push($(element).text());
        });

        var profilePictureUrlRaw = [];
        $(".relative img").each(function (index, element) {
          profilePictureUrlRaw.push($(element).attr("src"));
        });

        var creatorPictureUrl = profilePictureUrlRaw[2];

        if (clip[0] === undefined) {
          const err = "Error: The clip was not found. Try a valid url."

          resolve(err);
        } else {
          const clipName = clipNameRaw[0].replace(" ", ""),
          clipUrl = `${clip[0]}`;

          var res = {
          clipName,
          clipUrl,
          creatorUsername,
          creatorUrl,
          creatorPictureUrl,
          creatorWasPlaying,
          clippedOn,
          };

          resolve(res);
        }
      }
    });
  });
};
