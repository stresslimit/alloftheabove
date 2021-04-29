import React, { useState, useEffect } from "react";
import videos from './data';
import './tv.scss';

const Tv = () => {
  const [firstVideoIndex, setFirstVideoIndex] = useState();
  const [secondVideoIndex, setSecondVideoIndex] = useState();
  const [toggleVideo, setToggleVideo] = useState(true);
  const [isTransition, setIsTransition] = useState(false);
  const videoMainUrl = 'https://www.youtube-nocookie.com/embed/';
  const videoParams = '?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&cc_load_policy=1';
  // const videoParams = '?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1&cc_load_policy=1';

  const onClickButton = (index) => {
    // Add transition
    setIsTransition(true);

    // Start new video
    setTimeout(() => {
      if (toggleVideo) {
        setSecondVideoIndex(index);
        setFirstVideoIndex();
      } else {
        setFirstVideoIndex(index);
        setSecondVideoIndex();
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
      setFirstVideoIndex(0);
      setIsTransition(false);
      setToggleVideo(true);
    }, 1500);
  }, []);

  const firstVideoId = firstVideoIndex !== undefined ? videos[firstVideoIndex].id : '';
  const firstVideoStart = firstVideoIndex !== undefined ? videos[firstVideoIndex].start : '';
  const secondVideoId = secondVideoIndex !== undefined ? videos[secondVideoIndex].id : '';
  const secondVideoStart = secondVideoIndex !== undefined ? videos[secondVideoIndex].start : '';

  return (
    <div id="tv">
      <iframe
        className={`${toggleVideo ? 'active' : ''}`}
        title="iframe-first-video"
        src={`${videoMainUrl}${firstVideoId}${videoParams}&start=${firstVideoStart}`}
        frameborder="0"
        allowfullscreen
        // allow="autoplay"
      ></iframe>
      <iframe
        className={`${!toggleVideo ? 'active' : ''}`}
        title="iframe-second-video"
        src={`${videoMainUrl}${secondVideoId}${videoParams}&start=${secondVideoStart}`}
        frameborder="0"
        allowfullscreen
        // allow="autoplay"
      ></iframe>
      <div 
        className={`transition ${isTransition ? 'active' : ''}`}
      ></div>
      <div className="controller">
        <ul>
          {videos.map((video, index) => <li key={index}><button onClick={() => onClickButton(index)}>{index + 1}</button></li>)}
        </ul>
      </div>
    </div>
  )
}

export default Tv;
