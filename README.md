# Empty A YouTube Playlist

## Description
Use this bit of JavaScript to remove all the videos from a YouTube playlist (usually the watch later, as this cant be deleted and recreated anew)

## How to Use
Open up your [watch later](https://www.youtube.com/playlist?list=WL) playlist then press F12. Go to the console tab and copy this code into it and press enter. It will then run, it could take some time depending on how many videos you have.

## Problems
YouTube has some sort of rate limiting in place for removing videos from a playlist, so it could just stop working at any time if you remove to many videos to quickly. To test if this has happened try to remove a video manually, if it doesnt get removed YouTube has blocked you from removing videos, wait a while and you should be able to run the script again, but change the time (ms) in setInterval() function to reduce the change of it happening again. 1000ms should guarantee that it does not happen, you may be able to get away with as little as 100ms.
