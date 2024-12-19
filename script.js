document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('video-player');
    const frameInfo = document.getElementById('frame-info');
    const frameRate = 60; // フレームレートを60FPSに固定

    function updateFrameInfo() {
        const currentFrame = Math.floor(videoPlayer.currentTime * frameRate);
        const totalFrames = Math.floor(videoPlayer.duration * frameRate);
        frameInfo.textContent = `${currentFrame}/${totalFrames}`;
    }

    videoPlayer.addEventListener('loadedmetadata', updateFrameInfo);
    videoPlayer.addEventListener('timeupdate', updateFrameInfo);

    videoPlayer.load();
});

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

document.addEventListener('keydown', function(event) {
    const videoPlayer = document.getElementById('video-player');
    const frameRate = 60; // フレームレートを60FPSに固定
    const frameTime = 1 / frameRate;

    if (event.code === 'Space') {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    } else if (event.code === 'KeyA') {
        videoPlayer.currentTime -= frameTime;
    } else if (event.code === 'KeyD') {
        videoPlayer.currentTime += frameTime;
    }
});
