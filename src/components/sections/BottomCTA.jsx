import { useEffect, useRef } from 'react';

function BottomTypewriter({ className = '' }) {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    const cursor = cursorRef.current;
    if (!el) return;

    const phrases = [
      'relationship selling',
      'renewals',
      'customer satisfaction',
      'decisions',
      'business networking',
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId = null;
    let mounted = true;

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseAfterTyping = 2000;
    const pauseBetween = 500;

    function type() {
      if (!mounted) return;
      const current = phrases[phraseIndex];

      if (!isDeleting && charIndex < current.length) {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        timeoutId = setTimeout(type, typingSpeed);
      } else if (!isDeleting && charIndex === current.length) {
        timeoutId = setTimeout(() => {
          if (!mounted) return;
          isDeleting = true;
          type();
        }, pauseAfterTyping);
      } else if (isDeleting && charIndex > 0) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        timeoutId = setTimeout(type, deletingSpeed);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timeoutId = setTimeout(type, pauseBetween);
      }
    }

    if (cursor) cursor.style.display = 'inline-block';
    type();

    return () => {
      mounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <span className={className} style={{ display: 'inline' }}>
      <span ref={textRef} />
      <span
        ref={cursorRef}
        style={{
          display: 'none',
          width: '2px',
          height: '1em',
          backgroundColor: '#D12D40',
          marginLeft: '3px',
          verticalAlign: 'baseline',
          animation: 'blink 0.7s infinite',
        }}
      />
    </span>
  );
}

export default function BottomCTA() {
  return (
    <section
      className="py-20"
      style={{ background: 'radial-gradient(104.62% 100% at 50% 100%, #000 0%, #000 80.68%, #1D2025 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side */}
        <div>
          <h2 className="text-white font-['Manrope'] font-semibold" style={{ fontSize: '40px' }}>
            Accelerate{' '}
            <BottomTypewriter className="text-[#D12D40]" />
          </h2>
          <p className="text-white/70 text-base mt-4 font-['Inter']">
            Clear, authenticated messages that cut back-and-forth and keep work moving.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center shrink-0">
          <a
            href="https://app.emovid.com/?plan=business&duration=annually"
            className="bg-[#8B1A2B] text-white rounded-full px-12 py-4 text-base hover:bg-[#6B1420] transition font-['Inter'] cursor-pointer inline-block"
            style={{ textDecoration: 'none' }}
          >
            Get Started Free
          </a>
          <p className="text-white/50 text-sm mt-3 text-center font-['Inter']">
            No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
