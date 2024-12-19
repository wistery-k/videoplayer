document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('video-player');
    const frameInfo = document.getElementById('frame-info');
    const speedInfo = document.getElementById('speed-info');
    const frameRate = 30;

    function updateFrameInfo() {
        const currentFrame = Math.floor(videoPlayer.currentTime * frameRate);
        const totalFrames = Math.floor(videoPlayer.duration * frameRate);
        frameInfo.textContent = `${currentFrame}/${totalFrames}`;
    }

    function updateSpeedInfo() {
        speedInfo.textContent = `Speed: ${videoPlayer.playbackRate.toFixed(1)}x`;
    }

    videoPlayer.addEventListener('loadedmetadata', updateFrameInfo);
    videoPlayer.addEventListener('timeupdate', updateFrameInfo);

    videoPlayer.load();

    document.addEventListener('keydown', function(event) {
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
        } else if (event.code === 'KeyW') {
            videoPlayer.playbackRate = Math.min(2.0, videoPlayer.playbackRate + 0.1);
            updateSpeedInfo();
        } else if (event.code === 'KeyS') {
            videoPlayer.playbackRate = Math.max(0.1, videoPlayer.playbackRate - 0.1);
            updateSpeedInfo();
        }
    });
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
