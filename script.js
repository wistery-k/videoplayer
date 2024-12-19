document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');

    if (file) {
        const fileURL = URL.createObjectURL(file);
        videoSource.src = fileURL;
        videoPlayer.load();
    }
});

document.getElementById('frame-forward').addEventListener('click', function() {
    const videoPlayer = document.getElementById('video-player');
    const frameRate = 30; // ここでは30fpsの動画を想定
    const frameTime = 1 / frameRate;
    videoPlayer.currentTime += frameTime;
});
