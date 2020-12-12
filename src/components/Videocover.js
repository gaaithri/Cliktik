import VideoCover from 'react-video-cover';
import React, {Component} from 'react'
class Videocover extends Component {
    render() {
        const videoOptions = {
            // < iframe src = "//player.vimeo.com/video/443244046?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1&amp;loop=1" allowfullscreen = "" ></>
            src: 'https://player.vimeo.com/video/443244046?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1&amp;',
            ref: videoRef => {
                this.videoRef = videoRef;
            },
            onClick: () => {
                if (this.videoRef && this.videoRef.paused) {
                    this.videoRef.play();
                } else if (this.videoRef) {
                    this.videoRef.pause();
                }
            },
            title: 'click to play/pause',
        };
        return (
            <div style={{
                width: '300px',
                height: '300px',
                overflow: 'hidden',
            }}>
                <VideoCover videoOptions={videoOptions}
                />
            </div>
        );
    }
}

export default Videocover