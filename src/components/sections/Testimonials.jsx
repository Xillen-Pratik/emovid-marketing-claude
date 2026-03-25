import { useState, useRef, useEffect, useCallback } from 'react';

import csnLogo from '../../assets/images/testimonials/csn-logo.png';
import btpmLogo from '../../assets/images/testimonials/btpm-logo.webp';
import vethLogo from '../../assets/images/testimonials/veth-group-logo.svg';
import jeffreyImg from '../../assets/images/testimonials/jeffrey-hayzlett.png';
import lisaImg from '../../assets/images/testimonials/lisa-latrovato.webp';
import milesImg from '../../assets/images/testimonials/miles-veth1.png';

const testimonials = [
  {
    logo: csnLogo,
    logoAlt: 'C-Suite Network',
    logoWidth: 262,
    logoHeight: 22,
    personImg: jeffreyImg,
    personAlt: 'Jeffrey W. Hayzlett',
    name: 'Jeffrey W. Hayzlett',
    title: 'Chairman & Founder of the C-Suite Network',
    quote: 'The power move that let Jeffrey be in 10 places at once',
    readStoryUrl: '/testimonials/jeffrey-hayzlett/',
    videoSrc: 'https://www.emovid.com/wp-content/uploads/2025/04/jeff_hayzlett.mp4',
  },
  {
    logo: btpmLogo,
    logoAlt: 'BTPM',
    logoWidth: 222,
    logoHeight: 60,
    personImg: lisaImg,
    personAlt: 'Lisa LaTrovato',
    name: 'Lisa LaTrovato',
    title: 'Director, BTPM',
    quote: 'The game-changer shift that transformed fundraising',
    readStoryUrl: '/testimonials/btpm-lisa-latrovato/',
    videoSrc: 'https://www.emovid.com/wp-content/uploads/2026/01/video-932e37df-1284-4f7f-bfa8-1977320862a7-mhds2g9dlltlb7vd99.mp4',
  },
  {
    logo: vethLogo,
    logoAlt: 'Veth Group',
    logoWidth: 144,
    logoHeight: 30,
    personImg: milesImg,
    personAlt: 'Miles Veth',
    name: 'Miles Veth',
    title: 'Founder of Veth Group',
    quote: "Why Miles\u2019s team now wishes they had more emails",
    readStoryUrl: '/testimonials/miles-veth/',
    videoSrc: 'https://www.emovid.com/wp-content/uploads/2025/04/Miles.mp4',
  },
];

function TestimonialCard({ item, index, activeIndex, setActiveIndex }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isActive = activeIndex === index;

  const handleThumbnailClick = useCallback(() => {
    setActiveIndex(index);
  }, [index, setActiveIndex]);

  const handleVideoClick = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, []);

  const handleReset = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setActiveIndex(null);
  }, [setActiveIndex]);

  // Play/pause video based on active state
  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  // Click outside to revert back to image
  useEffect(() => {
    if (!isActive) return;
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        handleReset();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isActive, handleReset]);

  return (
    <div
      ref={containerRef}
      className="testimonial-card-col"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1 1 0',
        minWidth: 0,
      }}
    >
      {/* Company Logo - OUTSIDE the card, above it */}
      <div
        className="testimonial-logo-wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60px',
          flexShrink: 0,
        }}
      >
        <img
          src={item.logo}
          alt={item.logoAlt}
          style={{
            maxWidth: `${item.logoWidth}px`,
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Card body */}
      <div
        className="testimonial-card-body"
        style={{
          border: '1px solid #ABADAF',
          borderRadius: '16px',
          backgroundColor: 'transparent',
          paddingBottom: '49px',
          width: '100%',
          overflow: 'visible',
          position: 'relative',
          marginTop: '178px',
        }}
      >
        {/* Person Image / Video - pulled UP above the card border */}
        <div
          style={{
            position: 'relative',
            top: '-150px',
            marginBottom: '-150px',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* Fixed-height container to prevent card shift */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '300px',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            {/* Thumbnail Image - NO border, NO play button overlay */}
            <img
              src={item.personImg}
              alt={item.personAlt}
              style={{
                width: '210px',
                height: 'auto',
                objectFit: 'cover',
                cursor: 'pointer',
                display: isActive ? 'none' : 'block',
              }}
              onClick={handleThumbnailClick}
            />

            {/* Video container with maroon border */}
            {isActive && (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  border: '4px solid #8a2734',
                  borderRadius: '12px 12px 0 0',
                  overflow: 'hidden',
                }}
              >
                <video
                  ref={videoRef}
                  src={item.videoSrc}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    display: 'block',
                  }}
                  playsInline
                  preload="none"
                  onClick={handleVideoClick}
                />
              </div>
            )}

            {/* Hidden video element to keep ref alive when not active */}
            {!isActive && (
              <video
                ref={videoRef}
                src={item.videoSrc}
                style={{ display: 'none' }}
                playsInline
                preload="none"
              />
            )}
          </div>
        </div>

        {/* Text Info Area */}
        <div style={{ padding: '24px 24px 0', textAlign: 'center' }}>
          <p
            className="font-['Inter']"
            style={{
              fontSize: '23px',
              fontWeight: 600,
              color: 'rgb(17, 17, 17)',
              margin: '0 0 4px',
              lineHeight: 1.3,
            }}
          >
            {item.name}
          </p>
          <p
            className="font-['Inter']"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgb(17, 17, 17)',
              margin: '0 0 16px',
            }}
          >
            {item.title}
          </p>

          {/* Maroon divider */}
          <div
            style={{
              width: '80px',
              height: '1px',
              backgroundColor: '#CF384A',
              margin: '0 auto 16px',
            }}
          />

          <p
            className="font-['Inter']"
            style={{
              fontSize: '20px',
              fontWeight: 400,
              color: 'rgb(17, 17, 17)',
              margin: '0 0 16px',
              lineHeight: 1.4,
            }}
          >
            {item.quote}
          </p>

          <a
            href={item.readStoryUrl}
            className="font-['Inter']"
            style={{
              fontSize: '19px',
              fontWeight: 400,
              color: '#CF384A',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
            onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
          >
            Read Story
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white" style={{ padding: '50px 15px' }}>
      <div style={{ maxWidth: '1420px', margin: '0 auto', textAlign: 'center' }}>
        <p
          className="font-['Inter']"
          style={{
            fontSize: '16px',
            fontWeight: 300,
            color: 'rgb(125, 127, 131)',
            textTransform: 'uppercase',
            letterSpacing: '-0.1px',
            margin: '0 0 8px',
          }}
        >
          Hear from our Customers
        </p>
        <h2
          className="font-['Manrope']"
          style={{
            fontSize: 'clamp(28px, 1.75rem + ((1vw - 3.2px) * 1.364), 40px)',
            fontWeight: 600,
            color: 'rgb(17, 17, 17)',
            margin: '0 0 48px',
          }}
        >
          Why businesses love Emovid
        </h2>

        <div
          className="testimonials-row"
          style={{
            display: 'flex',
            gap: '48px 24px',
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'flex-start',
          }}
        >
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
