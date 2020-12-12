import React, { useRef, useState } from 'react';
import ReactPlyr from 'react-player';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar'
import './videoplayer.css';

function Videoplayer({url,channel, description,shares,messages,likes,song  }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        // can use callback  - check videoplayer
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }

        else {
            videoRef.current.play();
            setPlaying(true);
        }
        /* if video is playing
        stop it */

        // otherwise if it is not playing 
        // play it 
    };
    return (
        <div className="video_p" 
       >
            <ReactPlyr className ="video__player" 
                onClick={handleVideoPress}
                played='0'
                duration='0'
               playing='true'
            //  playing="true"
            //    light="false"

                // className="video__player"
                title =""
                // pip='false'
                controls='true'
                // light='true'
                loop='true'
                ref={videoRef}
            muted='false' 
            volume='0.8'  
                url={url} 
                    //   url="https://youtu.be/zCbQffIER_E"
                // config={{
                //     youtube: {
                //         playerVars: { controls: 0, modestbranding: 0, showinfo: 1, autohide: 1, rel:0},
                //         embedOptions: { 
                //             title:"hello",
                //             modestbranding:1

                //         }
                //     }
                // }}
                 width='80wh'
                 height= '80vh'
               
              
               
            />

            <VideoFooter
            channel={channel}
            description={description}
            song={song}
            />
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
         
         
            {/* VideoSidebar */}
            {/* 
            <ReactPlyr className="videoplayer"
                url="https://youtu.be/WXuK6gekU1Y"
                width="100%"
                height="100%"
                controls="false"
                loop="false"
                playing="true"
            ></ReactPlyr> */}
        </div>

    );
}

export default Videoplayer;

