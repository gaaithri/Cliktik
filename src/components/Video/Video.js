import React from 'react';
import "./video.css";
// import Video from ''
// import { player } from ';
import { Player } from 'video-react';

function Video() {
    return (
        <div className="video">

            <Player className="video__player"
                playsInline
<iframe width="707" height="398" src="https://www.youtube.com/embed/sVPYIRF9RCQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />


            {/*  */}


        </div>


    );
}

export default Video;
