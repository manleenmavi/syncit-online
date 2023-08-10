# SyncIt Online

Synchronize YouTube Videos across multiple devices based on a 10-second counter. This is useful when playing the same song on multiple devices that can act as speakers.

## Video Initialization

To ensure synchronization, video initialization is necessary because the video's starting time must be loaded to prevent buffer-related synchronization issues.

**First approach: PIN - 2222**
1. Manually play and pause the video one time. 
2. This initializes the video and makes it ready to sync.

**Second approach: PIN - 5555**
1. Auto-initialize by playing/pausing and resetting the muted video in the background.
2. Sync will play the video muted to prevent auto-play block by the browser.

## Version 0.1.0

Try the latest version of SyncIt Online at the following link:

[https://syncit.mvdev.me/](https://syncit.mvdev.me/)

## Limitations

- Real-time synchronization across devices is not supported.
- Proper synchronization may not be achievable with live videos.
- When using the "Sync Again" feature, the video will always start from the beginning.
