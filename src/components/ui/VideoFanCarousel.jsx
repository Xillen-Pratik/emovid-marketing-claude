import React, { useRef, useEffect } from 'react';

import video1 from '../../assets/videos/video-1.mp4';
import video2 from '../../assets/videos/video-2.mp4';
import video3 from '../../assets/videos/video-3.mp4';
import video4 from '../../assets/videos/video-4.mp4';
import video5 from '../../assets/videos/video-5.mp4';

const videos = [video1, video2, video3, video4, video5];

const positionConfigs = [
  { scale: 0.75, translateX: -458, translateY: 60, zIndex: 1, brightness: 0.5 },
  { scale: 0.9, translateX: -250, translateY: 30, zIndex: 2, brightness: 0.8 },
  { scale: 1.1, translateX: 0, translateY: 0, zIndex: 10, brightness: 1 },
  { scale: 0.9, translateX: 250, translateY: 30, zIndex: 2, brightness: 0.8 },
  { scale: 0.75, translateX: 458, translateY: 60, zIndex: 1, brightness: 0.5 },
];

export default function VideoFanCarousel() {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        video.play().catch(() => {});
      }
    });
  }, []);

  return (
    <div className="fan-container">
      {videos.map((src, i) => {
        const config = positionConfigs[i];
        return (
          <div
            key={i}
            className="new-banner-card"
            style={{
              position: 'absolute',
              left: '50%',
              marginLeft: '-132px',
              top: '25px',
              width: '265px',
              height: '415px',
              borderRadius: '16px',
              overflow: 'hidden',
              transform: `translateX(${config.translateX}px) translateY(${config.translateY}px) scale(${config.scale})`,
              zIndex: config.zIndex,
              filter: config.brightness < 1 ? `brightness(${config.brightness})` : 'none',
              transition: 'all 0.5s ease',
            }}
          >
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={src}
              muted
              autoPlay
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
