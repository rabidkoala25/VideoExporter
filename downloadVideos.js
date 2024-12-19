// Get all video elements on the page
const videos = document.querySelectorAll('video');

// Extract the source links and open a new tab for each video to download
videos.forEach((video, index) => {
    const sources = video.querySelectorAll('source');
    sources.forEach((source, sourceIndex) => {
        const link = document.createElement('a');
        link.href = source.src;
        link.download = `video_${index}_source_${sourceIndex}.mp4`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    if (video.src) {
        const link = document.createElement('a');
        link.href = video.src;
        link.download = `video_${index}.mp4`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});