import React from 'react';
import "./video-footer.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";
function VideoFooter({channel, description, song}) {
    return (
        <div className="video-footer">
            <div className="footer-text">
            <h3>@{channel}</h3>
            <p>{description}</p>
           <div className="musicTicker">
            <MusicNoteIcon className="musicIcon" />
            <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
           </div>
            </div>
            <img className="footer-image" src="https://static.thenounproject.com/png/934821-200.png"/>
        </div>
    )
}

export default VideoFooter
