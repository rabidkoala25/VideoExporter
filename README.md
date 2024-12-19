# Download Videos Script

This JavaScript script extracts and downloads all video sources from a webpage. It opens a new tab for each video source to trigger the download automatically.

## Usage

1. Open the webpage with videos in Google Chrome.
2. Press `Ctrl+Shift+I` (or `Cmd+Option+I` on Mac) to open the Developer Tools.
3. Go to the "Console" tab.
4. Copy the contents of `downloadVideos.js` and paste it into the console.
5. Press `Enter` to run the script.

## Script Details

The script performs the following steps:
1. Selects all video elements on the page.
2. Extracts the source links from each video element.
3. Creates a temporary anchor element for each video source.
4. Sets the `href` attribute of the anchor to the video source URL.
5. Sets the `download` attribute to specify the filename for the downloaded video.
6. Sets the `target` attribute to `_blank` to open the download in a new tab.
7. Appends the anchor to the document body and triggers a click event to start the download.
8. Removes the anchor element from the document body.

