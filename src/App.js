import React, { useEffect, useState } from 'react';
import './App.css';
import Videoplayer from './components/Vplayer/Videoplayer';
import axios from './axios';
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get(`md1/posts`);
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  return (
    <div className="app">
      Clicktik
      <div className="app__videos">
        {
          videos.map(
            ({ url, channel, description, song, likes, messages, shares }) => (
              <Videoplayer
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                messages={messages}
                shares={shares}

              />
            ))
        }
        {/* <Videoplayer
          url="https://www.youtube-nocookie.com/embed/sVPYIRF9RCQ"
          // url= "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
          channel="codosong"
          description="Ryhtmic beats"
          song=" Do Re Mi So  "
          likes={101}
          messages={133}
          shares={99}
        /> */}





      </div>
    </div>
  );
}
export default App;
