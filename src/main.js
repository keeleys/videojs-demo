import videojs from 'video.js';
import videoPlayTime from 'videojs-playtime';
import 'video.js/dist/video-js.css';
import ReferseBtn from './refrese';
import './main.css';

videojs.plugin('videoPlayTime', videoPlayTime);
videojs('my-video', {
    techOrder: ['html5', 'flash'],
    plugins: {
        videoPlayTime: null
    }
}, function hander() {
    const btn = new ReferseBtn(this);
    btn.hide();
    this.on('play', () => btn.hide());
    this.on('pause', () => btn.show());
    this.addChild(btn, {}, 2);
    this.on('loadeddata', () => {
        this.currentTime(20);
        this.play();
    });
    // this.on('pause', () => console.log(this.playTime()));
});
