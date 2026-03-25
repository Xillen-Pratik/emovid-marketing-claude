import React from 'react';

import libertyVentures from '../../assets/images/trusted-by/liberty-ventures.svg';
import intexSolutions from '../../assets/images/trusted-by/intex-solutions.svg';
import csuiteNetwork from '../../assets/images/trusted-by/csuite-network.svg';
import jstreet from '../../assets/images/trusted-by/jstreet.svg';
import largentMedia from '../../assets/images/trusted-by/largent-media.svg';
import consciousCapitalism from '../../assets/images/trusted-by/conscious-capitalism.svg';
import kcomm from '../../assets/images/trusted-by/kcomm.svg';

const logos = [
  { src: kcomm, alt: 'KCOMM' },
  { src: libertyVentures, alt: 'Liberty Ventures' },
  { src: intexSolutions, alt: 'INTEX Solutions' },
  { src: csuiteNetwork, alt: 'C-Suite Network' },
  { src: jstreet, alt: 'JStreet Technology' },
  { src: largentMedia, alt: 'Largent Media' },
  { src: consciousCapitalism, alt: 'Conscious Capitalism' },
];

export default function LogoMarquee() {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  return (
    <div
      className="slick-slider-container"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Left fade gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '80px',
          height: '100%',
          background: 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 40.38%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Right fade gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '80px',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 40.38%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Scrolling track */}
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          alignItems: 'center',
          animation: 'marquee 25s linear infinite',
          width: 'max-content',
        }}
      >
        {allLogos.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            style={{
              flexShrink: 0,
              padding: '0 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                width: '130px',
                height: 'auto',
                objectFit: 'contain',
                transition: 'filter 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%) opacity(0.6)';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
