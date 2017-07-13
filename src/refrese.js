import videojs from 'video.js';
/* eslint-disable no-underscore-dangle */

const Button = videojs.getComponent('Button');
const ReferseBtn = videojs.extend(Button, {
    buildCSSClass() {
        return 'my-btn vjs-big-play-centered';
    },
    handleClick() {
        this.player().play();
    }
});


ReferseBtn.prototype.controlText_ = 'Play Video';

export default ReferseBtn;
