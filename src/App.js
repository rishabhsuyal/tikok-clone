import React, { useState,useEffect } from "react";
import Video from "./components/Video/Video";
import db from "./firebase";
import "./App.css";
function App() {

  const [post, setpost] = useState([]);
  useEffect(() => {
    db.collection("post").onSnapshot((snapshot) =>
      setpost(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log(post);
  return (
    <div className="app">
      <h1>SUYALji</h1>
      <div className="app_vedios">
        {
          post.map(({ channel, description, song, likes, shares, messages, url }) => (
            <Video
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
              url={url}
            />
          ))
        }

      </div>

    </div>
  );
}

export default App;
