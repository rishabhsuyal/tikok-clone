import React,{useState} from 'react';
import "./video-sidebar.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
function VideoSidebar({likes, shares, messages}) {
    const [liked, setliked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="sidebar_button">
                {
                    liked?(<FavoriteIcon fontSize="large" onClick={()=>setliked(false)}/>):(<FavoriteBorderIcon fontSize="large" onClick={()=>setliked(true)}/>)
                }
                <p>{likes}</p>
            </div>
            <div className="sidebar_button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="sidebar_button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
