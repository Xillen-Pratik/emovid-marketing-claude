import logoFooter from '../../assets/images/logo/logo-footer.svg';
import qrCode from '../../assets/images/footer/qr-code.png';
import appStore from '../../assets/images/footer/app-store.png';
import googlePlay from '../../assets/images/footer/google-play.png';
import gmailExt from '../../assets/images/footer/gmail-extension.png';
import outlookExt from '../../assets/images/footer/outlook-extension.png';
import linkedinIcon from '../../assets/images/footer/linkedin.svg';
import youtubeIcon from '../../assets/images/footer/youtube.svg';
import instagramIcon from '../../assets/images/footer/instagram.svg';

const navColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', url: '/features/' },
      { label: 'Pricing', url: '/pricing/' },
      { label: 'Apps and Integrations', url: '/apps-and-integrations/' },
      { label: 'AI Usage Guide', url: '/usage-guide/' },
      { label: 'Testimonials', url: '/testimonials/' },
    ],
  },
  {
    heading: 'Downloads',
    links: [
      { label: 'iOS App', url: 'https://apps.apple.com/us/app/emovid/id6742115514' },
      { label: 'Android App', url: 'https://play.google.com/store/apps/details?id=com.emovid.app' },
      { label: 'Gmail Extension', url: 'https://chromewebstore.google.com/detail/emovid-for-gmail/jkafcfpegdjchgoijlanmpkalmpijaig' },
      { label: 'Outlook Extension', url: 'https://appsource.microsoft.com/en-us/product/office/WA200007498' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Press', url: 'https://emovidcorp.com/press' },
      { label: 'Contact Sales', url: 'https://emovidcorp.com/contact' },
      { label: 'Support', url: 'https://emovidcorp.com/support' },
      { label: 'About Us', url: 'https://emovidcorp.com/about' },
      { label: 'Affiliate', url: 'https://emovidcorp.com/affiliate/' },
    ],
  },
  {
    heading: 'Emovid For',
    links: [
      { label: 'Networking', url: '/networking/' },
      { label: 'Enterprise', url: '/enterprise/' },
      { label: 'Global Teams', url: '/global-teams/' },
      { label: 'Sales', url: '/sales/' },
      { label: 'Human Resources', url: '/human-resources/' },
      { label: 'Education', url: '/education/' },
      { label: 'Non Profit', url: '/non-profit/' },
      { label: 'Consultant', url: '/consultant/' },
      { label: 'Government', url: '/government/' },
      { label: 'Healthcare', url: '/healthcare/' },
      { label: 'Job Seeker', url: '/job-seeker/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '48px 80px 0' }}>
      <div style={{ maxWidth: '1745px', margin: '0 auto' }}>
        {/* Main Footer Row */}
        <div
          className="footer-main-row"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '60px',
          }}
        >
          {/* Left Column */}
          <div className="footer-left" style={{ maxWidth: '698px', flexShrink: 0 }}>
            {/* Logo */}
            <img
              src={logoFooter}
              alt="Emovid"
              style={{ width: '158px', height: '51px', display: 'block' }}
            />

            {/* Tagline */}
            <h6
              className="font-['Manrope']"
              style={{
                fontSize: '19px',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '1.4px',
                marginTop: '16px',
                marginBottom: 0,
              }}
            >
              Because Trust Matters&trade;
            </h6>

            {/* Sub-tagline */}
            <p
              className="font-['Inter']"
              style={{
                fontSize: '14px',
                fontWeight: 300,
                color: '#fff',
                margin: '4px 0 0',
              }}
            >
              Verified Human Communication&trade; in an AI-world
            </p>

            {/* Description */}
            <p
              className="font-['Inter']"
              style={{
                fontSize: '16px',
                fontWeight: 300,
                color: '#fff',
                lineHeight: '22.4px',
                marginTop: '16px',
                marginBottom: 0,
              }}
            >
              Emovid is dedicated to restoring trust and authenticity in digital communication. Its
              patented process and visual verification seal ensure that every message sent through
              its platform is verified human, transparent, and trustworthy. Each message is
              encrypted, tracked, and validated across all formats–video, audio, text, and translation–
              allowing people and business to communicate with confidence in the age of
              artificial intelligence.
            </p>

            {/* App Download Section: QR + Badges */}
            <div
              className="footer-app-download"
              style={{
                display: 'flex',
                gap: '20px',
                marginTop: '55px',
                alignItems: 'flex-start',
              }}
            >
              {/* QR Code */}
              <img
                src={qrCode}
                alt="Download Emovid"
                style={{ width: '100px', height: '100px', borderRadius: '4px' }}
              />

              {/* Badges Grid */}
              <div>
                {/* Row 1: App Store + Google Play */}
                <div style={{ display: 'flex', gap: '19.2px', marginBottom: '8px' }}>
                  <a href="https://apps.apple.com/us/app/emovid/id6742115514" target="_blank" rel="noopener noreferrer">
                    <img src={appStore} alt="App Store" style={{ height: '44px', width: 'auto' }} />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.emovid.app" target="_blank" rel="noopener noreferrer">
                    <img src={googlePlay} alt="Google Play" style={{ height: '44px', width: 'auto' }} />
                  </a>
                </div>
                {/* Row 2: Gmail + Outlook Extensions */}
                <div style={{ display: 'flex', gap: '19.2px' }}>
                  <a href="https://chromewebstore.google.com/detail/emovid-for-gmail/jkafcfpegdjchgoijlanmpkalmpijaig" target="_blank" rel="noopener noreferrer">
                    <img src={gmailExt} alt="Gmail Extension" style={{ height: '44px', width: 'auto' }} />
                  </a>
                  <a href="https://appsource.microsoft.com/en-us/product/office/WA200007498" target="_blank" rel="noopener noreferrer">
                    <img src={outlookExt} alt="Outlook Extension" style={{ height: '44px', width: 'auto' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div
            className="footer-nav-cols"
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 'clamp(40px, 5vw, 100px)',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
            }}
          >
            {navColumns.map((col, i) => (
              <div key={i}>
                <h3
                  className="font-['Manrope']"
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: '20.25px',
                    margin: '0 0 19.2px',
                  }}
                >
                  {col.heading}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {col.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      className="font-['Inter']"
                      style={{
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#fff',
                        textDecoration: 'none',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          className="footer-copyright-bar"
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '19.2px',
            padding: '24px 0',
            marginTop: '24px',
            borderTop: '1px solid rgb(171, 173, 175)',
          }}
        >
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '19.2px', alignItems: 'center' }}>
            <a href="https://www.linkedin.com/company/emovid/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://www.youtube.com/@emovidcorp" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://www.instagram.com/emovidcorp/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
            </a>
          </div>

          {/* Copyright Text */}
          <div
            className="font-['Inter']"
            style={{
              fontSize: '13px',
              fontWeight: 400,
              color: '#fff',
              textAlign: 'center',
              flex: 1,
            }}
          >
            <p style={{ margin: 0 }}>
              Copyright &copy; 2023 &ndash; 2026 Emovid Corporation, All Rights Reserved.
            </p>
            <p style={{ margin: 0 }}>
              Emovid&reg; is a registered trademark of Emovid Corporation.
            </p>
          </div>

          {/* Terms & Privacy */}
          <div style={{ display: 'flex', gap: '19.2px' }}>
            <a
              href="/terms/"
              className="font-['Inter']"
              style={{ fontSize: '13px', fontWeight: 400, color: '#fff', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Terms of Service
            </a>
            <a
              href="/privacy/"
              className="font-['Inter']"
              style={{ fontSize: '13px', fontWeight: 400, color: '#fff', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
