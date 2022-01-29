# cliprxyz
Fetch infos from a Twitch clip with [Clipr.xyz](https://clipr.xyz) website.

<a href="https://github.com/luisgbr1el/cliprxyz/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/luisgbr1el/cliprxyz?style=for-the-badge"></a>
<a href="https://github.com/luisgbr1el/cliprxyz/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/luisgbr1el/cliprxyz?style=for-the-badge"></a>
<a href="https://github.com/luisgbr1el/cliprxyz"><img alt="GitHub license" src="https://img.shields.io/github/license/luisgbr1el/cliprxyz?style=for-the-badge"></a>

- The package doesn't have a **error callback**.

# Install (with NPM)
```javascript
npm i cliprxyz
```

# Usage
```javascript
const cliprxyz = require("cliprxyz");

cliprxyz.downloadClip("CLIP_URL").then(res => {
    console.log(res)
});
```

The result will be:
```javascript
{
  clipName: 'Shows the clip name',
  clipUrl: 'Shows the clip url',
  creatorUsername: 'Shows the creator username',
  creatorUrl: 'Shows the creator profile url',
  creatorWasPlaying: 'Shows what the creator was playing',
  clippedOn: 'Shows the date from when the livestream was clipped'
}
```

## Get the clip name
```javascript
const cliprxyz = require("cliprxyz");

cliprxyz.downloadClip("CLIP_URL").then(res => {
    console.log(res.clipName)
});
```

## Get the clip url
```javascript
const cliprxyz = require("cliprxyz");

cliprxyz.downloadClip("CLIP_URL").then(res => {
    console.log(res.clipUrl)
});
```

## Get the creator username
```javascript
const cliprxyz = require("cliprxyz");

cliprxyz.downloadClip("CLIP_URL").then(res => {
    console.log(res.creatorUsername)
});
```

## Get the creator url
```javascript
const cliprxyz = require("cliprxyz");

cliprxyz.downloadClip("CLIP_URL").then(res => {
    console.log(res.creatorUrl)
});
```

## Get what the creator was playing
```javascript
const cliprxyz = require("cliprxyz");

cliprxyz.downloadClip("CLIP_URL").then(res => {
    console.log(res.creatorWasPlaying)
});
```

## Get when the livestream was clipped
```javascript
const cliprxyz = require("cliprxyz");

cliprxyz.downloadClip("CLIP_URL").then(res => {
    console.log(res.clippedOn)
});
```


# Author
<a href="https://github.com/luisgbr1el">luisgbr1el</a>
