import videojs from 'video.js';
import videoPlayTime from 'videojs-playtime';
import 'video.js/dist/video-js.css';

videojs.plugin('videoPlayTime', videoPlayTime);
videojs('my-video', {
    techOrder: ['flash', 'html5'],
    plugins: {
        videoPlayTime: null
    }
}, function hander() {
    this.on('loadedmetadata', () => {
        this.play();
        setTimeout(() => this.currentTime(20), 1000);
    });
});
