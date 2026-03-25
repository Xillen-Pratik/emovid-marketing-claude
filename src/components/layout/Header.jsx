import { useState, useEffect } from 'react';
import brandingLogo from '../../assets/images/logo/branding.svg';
import personIcon from '../../assets/images/logo/person-icon.svg';

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Navigation Bar — on top */}
      <nav
        className={`bg-white transition-shadow ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 lg:px-6 py-4">
          {/* Logo - branding.svg */}
          <a href="/" className="flex-shrink-0">
            <img
              src={brandingLogo}
              alt="Emovid"
              className="custom-logo"
              style={{ width: '150px', height: '50px' }}
            />
          </a>

          {/* Center Nav Links (desktop) */}
          <div className="hidden lg:flex items-center gap-8 text-base font-['Inter']">
            <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition font-semibold">
              Product
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5">
                <path d="M3 5L6 8L9 5" />
              </svg>
            </button>
            <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition font-semibold">
              Use Cases
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5">
                <path d="M3 5L6 8L9 5" />
              </svg>
            </button>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition font-semibold">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition font-semibold">Testimonials</a>
            <a href="#press" className="text-gray-700 hover:text-gray-900 transition font-semibold">Press</a>
          </div>

          {/* Right Side (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://app.emovid.com/"
              className="flex items-center gap-[5px] bg-white text-black rounded-lg px-[18px] py-4 text-base font-semibold font-['Inter'] hover:bg-gray-50 transition"
              style={{ border: 'none' }}
            >
              <img
                src={personIcon}
                alt=""
                style={{ width: '20px', height: '20px' }}
              />
              Login
            </a>
            <a
              href="/get-started"
              className="bg-[#8B1A2B] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#6B1420] transition font-['Inter']"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Toggle menu'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-4 space-y-4 font-['Inter']">
            <a href="#product" className="block text-gray-700 hover:text-gray-900">Product</a>
            <a href="#use-cases" className="block text-gray-700 hover:text-gray-900">Use Cases</a>
            <a href="#pricing" className="block text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-gray-900">Testimonials</a>
            <a href="#press" className="block text-gray-700 hover:text-gray-900">Press</a>
            <hr className="border-gray-200" />
            <a href="https://app.emovid.com/" className="block text-gray-700 hover:text-gray-900">Login</a>
            <a
              href="/get-started"
              className="block text-center bg-[#8B1A2B] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#6B1420] transition"
            >
              Get Started Free
            </a>
          </div>
        )}
      </nav>

      {/* Announcement Banner — below nav */}
      {showBanner && (
        <div className="bg-[#8B1A2B] text-white text-center py-2 text-sm relative">
          <span className="font-['Inter']">
            Emovid not only builds trust, but it saves time. Our average user saves 10+ hours a week.
          </span>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition"
            aria-label="Close banner"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="3" x2="13" y2="13" />
              <line x1="13" y1="3" x2="3" y2="13" />
            </svg>
          </button>
        </div>
      )}
    </header>
  );
}
