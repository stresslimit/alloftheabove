import React, { useState, useEffect } from "react"
import './tv.scss';

const videos = [
  'rvpkRXp6qbc',
  'tN8RE02iNII',
  'GvBX2WsXEo0',
  'TPkXAi_IKwQ',
  'thYg0GP8qsM',
  '_dWJVHIE9S8',
  'ylkWpE89nn8',
  'yC9wZTJmDqA',
  '0SdenMzFgBg',
  'WxXy9lsiUPM',
  'J6J9EfOdPgg',
  'UpIMFker8Mg',
]

const Tv = () => {
  const [firstSelectedVideo, setFirstSelectedVideo] = useState();
  const [secondSelectedVideo, setSecondSelectedVideo] = useState();
  const [toggleVideo, setToggleVideo] = useState(true);
  const [isTransition, setIsTransition] = useState(false);
  const videoMainUrl = 'https://www.youtube-nocookie.com/embed/';
  const videoParams = '?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1&cc_load_policy=1';

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

  useEffect(() => {
    setIsTransition(true);
    setTimeout(() => {
      setFirstSelectedVideo(videos[0]);
      setIsTransition(false);
      setToggleVideo(true);
    }, 1500);
  }, []);

  return (
    <div id="tv">
      <iframe
        className={`${toggleVideo ? 'active' : ''}`}
        title="iframe-first-video"
        src={`${videoMainUrl}${firstSelectedVideo}${videoParams}`}
        frameborder="0"
        allowfullscreen
        allow="autoplay"
      ></iframe>
      <iframe
        className={`${!toggleVideo ? 'active' : ''}`}
        title="iframe-second-video"
        src={`${videoMainUrl}${secondSelectedVideo}${videoParams}`}
        frameborder="0"
        allowfullscreen
        allow="autoplay"
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
