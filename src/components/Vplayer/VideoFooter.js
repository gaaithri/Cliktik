import React from 'react';
import './videofooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ReactTicker from 'react-ticker';
function VideoFooter({channel, description, song}) {
    return (

        <div className="videoFoooter">
            <div className="videoFooter__text">
                <h3> @{channel}</h3>
                <p>{description} </p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />

                    <ReactTicker mode="smooth">
                        {({ index }) => (
                            <p className= "videoFooter__ticker__text"> {song}</p>
                        )}


                    </ReactTicker>
                </div>
            </div>

            <img className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png" alt="oldieRecord" />
        </div>

    );
}

export default VideoFooter;
