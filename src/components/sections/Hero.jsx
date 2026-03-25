import TypewriterText from '../ui/TypewriterText';
import VideoFanCarousel from '../ui/VideoFanCarousel';
import VerifiedSealCard from '../ui/VerifiedSealCard';

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        background:
          'radial-gradient(25.98% 48.98% at 49% 2%, #D12D40 -60.67%, transparent 100%), radial-gradient(22% 26% at 26% 100%, rgba(139,21,56,0.6) 0%, transparent 100%), radial-gradient(35% 44% at 100% 100%, #8B1538 0%, transparent 100%), #000',
        position: 'relative',
        zIndex: 2,
        overflow: 'visible',
      }}
    >
      <div className="max-w-[1200px] mx-auto text-center pt-16 pb-0 px-4">
        {/* Tagline - 16px, #f1f1f2, font-weight 300 */}
        <p
          style={{
            fontSize: '16px',
            color: '#f1f1f2',
            fontWeight: 300,
            letterSpacing: '-0.1px',
            lineHeight: '22.4px',
            textAlign: 'center',
            fontFamily: "'Inter', sans-serif",
            marginBottom: '16px',
          }}
        >
          FAST &ndash; VERIFIED &ndash; PATENTED
        </p>

        {/* Headline */}
        <h2
          className="get-started-h2 text-[28px] sm:text-[36px] lg:text-[48px]"
          style={{
            fontWeight: 600,
            color: '#ffffff',
            lineHeight: '1.125',
            textAlign: 'center',
            fontFamily: "'Manrope', sans-serif",
            marginBottom: '8px',
          }}
        >
          Emovid delivers trust you can see
        </h2>

        {/* Typewriter animated text */}
        <div
          className="text-center max-w-[820px] mx-auto"
          style={{ padding: '8px 0 32px', minHeight: '72px' }}
        >
          <TypewriterText
            className="text-white font-['Inter'] text-[23px] font-normal"
          />
        </div>

        {/* CTA Button */}
        <div style={{ marginBottom: '32px' }}>
          <a
            href="https://app.emovid.com/?plan=business&duration=annually"
            className="get-started-btn"
            style={{
              display: 'inline-block',
              background:
                'linear-gradient(151.21deg, rgb(161, 45, 58) 17.63%, rgb(107, 23, 33) 79.47%)',
              color: '#fff',
              borderRadius: '100px',
              padding: '15px 60px',
              fontSize: '16px',
              fontWeight: 300,
              fontFamily: "'Inter', sans-serif",
              textDecoration: 'none',
              border: 'none',
              boxShadow: 'rgba(255, 198, 198, 0.2) 0px 0px 80px 20px',
              transition: 'opacity 0.2s',
            }}
          >
            Get Started Free
          </a>
        </div>

        {/* Video Fan Layout */}
        <div className="visual-area" style={{ position: 'relative' }}>
          <VideoFanCarousel />
        </div>

        {/* Verified Seal Card - overflows past hero section bottom */}
        <div
          className="seal-card-overlap"
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 12,
            marginTop: '-15px',
          }}
        >
          <VerifiedSealCard />
        </div>
      </div>
    </section>
  );
}
