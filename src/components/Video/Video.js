import React, { useRef, useState } from 'react';
import VideoFooter from '../video-footer/video-footer';
import VideoSidebar from '../video-sidebar/video-sidebar';
import "./Video.css";

function Video({channel, description, song, likes, shares, messages, url}) {

    const videoRef = useRef(null);
    const [playing, setplaying] = useState(false);

    const onVideoPress = () => {
        if (!playing) {
            videoRef.current.play();
            setplaying(true);
        }
        else {
            videoRef.current.pause();
            setplaying(false);
        }
    }

    return (
        <div className="video">
            <video
                className="video_player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                controls
                src={url}>
            </video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />

        </div>
    )
}

export default Video;
