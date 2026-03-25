import personWithBubble from '../../assets/images/use-cases/person-with-bubble-big.png';
import personBig from '../../assets/images/use-cases/person-big.png';
import infoBubbleBig from '../../assets/images/use-cases/info-bubble-big.png';
import frame19 from '../../assets/images/use-cases/frame-19.jpg';
import frame41 from '../../assets/images/use-cases/frame-4-1.jpg';
import infoBubble3 from '../../assets/images/use-cases/info-bubble-3.jpg';
import frameUseCase from '../../assets/images/use-cases/frame-use-case.png';
import frame4 from '../../assets/images/use-cases/frame-4.png';
import infoBubble1 from '../../assets/images/use-cases/info-bubble-1.jpg';
import checkSvg from '../../assets/images/icons/check.svg';

const blocks = [
  {
    heading: 'Protect your team with Verified Human Communication',
    bullets: [
      'Ensure every message is from a real person',
      'Stop impersonation and build trust in every exchange',
      'Instantly verify identity and intent to prevent attacks',
    ],
    reverse: false,
    desktopImg: personWithBubble,
    mobileImg: personBig,
    mobileInfoBubble: infoBubbleBig,
    cta: 'View Case Study',
    ctaLink: '/testimonials/miles-veth/',
  },
  {
    heading: 'Build the relationships that close deals faster',
    bullets: [
      'Send verified, authentic messages by video, audio, or text',
      'Personalize at scale while keeping every reply in one thread',
      'Track views, organize responses, and keep momentum',
    ],
    reverse: true,
    desktopImg: frame19,
    mobileImg: frame41,
    mobileInfoBubble: infoBubble3,
    cta: 'View Case Study',
    ctaLink: '/testimonials/miles-veth/',
  },
  {
    heading: 'Work moves faster — down the hall or around the world',
    bullets: [
      'Reduce back-and-forth and shorten project cycles',
      'Share once and collect replies on their time',
      'Keep updates, transcripts, and next steps in one place',
    ],
    reverse: false,
    desktopImg: frameUseCase,
    mobileImg: frame4,
    mobileInfoBubble: infoBubble1,
    cta: 'View Case Study',
    ctaLink: '/testimonials/miles-veth/',
  },
];

export default function UseCases() {
  return (
    <section
      className="bg-white"
      style={{
        marginTop: '48px',
        marginBottom: 0,
        paddingRight: '24px',
        paddingBottom: '80px',
        paddingLeft: '24px',
      }}
    >
      <div className="max-w-[1350px] mx-auto">
        {blocks.map((block, i) => (
          <div
            key={i}
            className={`use-case-block flex flex-col items-center gap-12 md:gap-20 ${
              block.reverse
                ? 'md:flex-row-reverse'
                : 'md:flex-row'
            } ${i === 0 ? '' : 'use-case-block-spacing'}`}
            style={{
              paddingLeft: !block.reverse ? '50px' : '0',
              paddingTop: i > 0 ? '80px' : '0',
            }}
          >
            {/* Text Column */}
            <div className="flex-1 use-case-text-col">
              <h3
                className="font-['Manrope']"
                style={{
                  fontSize: 'clamp(24px, 1.5rem + ((1vw - 3.2px) * 1.023), 33px)',
                  fontWeight: 600,
                  color: 'rgb(0, 0, 0)',
                  lineHeight: '37.125px',
                  letterSpacing: '-0.1px',
                  marginBottom: '32px',
                }}
              >
                {block.heading}
              </h3>

              <ul className="use-case-checklist" style={{ margin: '32px 0', padding: 0, listStyle: 'none' }}>
                {block.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="font-['Inter']"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      margin: '8px 0 16px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'rgb(17, 17, 17)',
                      lineHeight: '25.2px',
                    }}
                  >
                    <span
                      style={{
                        width: '21px',
                        height: '21px',
                        minWidth: '21px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        backgroundColor: '#8B1A2B',
                        marginTop: '3px',
                      }}
                    >
                      <img src={checkSvg} alt="" width="12" height="10" style={{ display: 'block' }} />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <a
                href={block.ctaLink}
                className="use-case-cta"
                style={{
                  display: 'inline-block',
                  background: 'rgb(255, 255, 255)',
                  color: 'rgb(0, 0, 0)',
                  padding: '15px 24px',
                  borderRadius: '100px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  border: '1px solid rgb(0, 0, 0)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgb(0, 0, 0)';
                  e.currentTarget.style.color = 'rgb(255, 255, 255)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgb(255, 255, 255)';
                  e.currentTarget.style.color = 'rgb(0, 0, 0)';
                }}
              >
                {block.cta}
              </a>
            </div>

            {/* Image Column */}
            <div className="flex-1 use-case-img-col" style={{ position: 'relative' }}>
              {/* Desktop image */}
              <img
                src={block.desktopImg}
                alt={block.heading}
                className="use-case-desktop-img"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  display: 'block',
                }}
              />
              {/* Mobile image + info bubble (hidden on desktop) */}
              <div className="use-case-mobile-img" style={{ display: 'none' }}>
                <img
                  src={block.mobileImg}
                  alt={block.heading}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    display: 'block',
                  }}
                />
                {block.mobileInfoBubble && (
                  <img
                    src={block.mobileInfoBubble}
                    alt="Info"
                    className="use-case-info-bubble"
                    style={{
                      position: 'absolute',
                      bottom: '-20px',
                      right: '-10px',
                      maxWidth: '60%',
                      height: 'auto',
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
