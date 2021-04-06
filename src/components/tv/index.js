import React, { useState } from "react"
import './tv.scss';

const videos = [
  'eFzOS8JPeC4',
  'JBH-VB4YdL8',
  '2vkhQi9yDog',
  'stbwg37THQ8',
  'YWftVixpbuI'
]

const Tv = () => {
  const [firstSelectedVideo, setFirstSelectedVideo] = useState(videos[0]);
  const [secondSelectedVideo, setSecondSelectedVideo] = useState(videos[1]);
  const [toggleVideo, setToggleVideo] = useState(true);
  const [isTransition, setIsTransition] = useState(false);

  const onClickButton = (index) => {
   
    // Add transition
    setIsTransition(true);

    // Start new video
    setTimeout(() => {
      if (toggleVideo) {
        setSecondSelectedVideo(videos[index]);
        setFirstSelectedVideo();
      } else {
        setFirstSelectedVideo(videos[index]);
        setSecondSelectedVideo();
      }
      setToggleVideo(!toggleVideo);
    }, 500);

    // Remove transition
    setTimeout(() => {
      setIsTransition(false);
    }, 1500);
  }

  return (
    <div id="tv">
      <iframe
        className={`${toggleVideo ? 'active' : ''}`}
        title="iframe-first-video"
        src={`https://www.youtube-nocookie.com/embed/${firstSelectedVideo}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1`}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <iframe
        className={`${!toggleVideo ? 'active' : ''}`}
        title="iframe-second-video"
        src={`https://www.youtube-nocookie.com/embed/${secondSelectedVideo}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1`}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div 
        className={`transition ${isTransition ? 'active' : ''}`}
      ></div>
      <div className="controller">
        <ul>
          {videos.map((video, index) => <li><button onClick={() => onClickButton(index)}>{index + 1}</button></li>)}
        </ul>
      </div>
    </div>
  )
}

export default Tv;
