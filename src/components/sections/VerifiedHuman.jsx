export default function VerifiedHuman() {
  return (
    <section
      className="authenticity-section"
      style={{
        background:
          'radial-gradient(104.62% 100% at 50% 100%, #000 0%, #000 80.68%, #1D2025 100%)',
        clipPath: 'ellipse(161% 100% at 50% 100%)',
        marginTop: '-140px',
        position: 'relative',
        zIndex: 1,
        paddingTop: '180px',
        paddingBottom: '80px',
      }}
    >
      <div className="max-w-[1200px] mx-auto text-center px-4 sm:px-12">
        <h2
          className="text-white font-['Manrope'] text-[28px] sm:text-[28px] md:text-[28px] lg:text-[28px] font-semibold mb-4"
          style={{ lineHeight: 1.3 }}
        >
          Emovid&rsquo;s Verified Human Communication&trade; Technology
        </h2>

        <p
          className="max-w-[700px] mx-auto mb-8 font-['Inter']"
          style={{ lineHeight: '22.4px', fontSize: '16px', fontWeight: 400, color: 'rgb(255,255,255)' }}
        >
          Every Emovid includes our patented Verified Human Communication&trade; seal to confirm
          it&rsquo;s truly from you: protected, tamper-proof, and verified.
        </p>

        <a
          href="#features"
          className="font-['Inter']"
          style={{
            display: 'inline-block',
            border: '1px solid #fff',
            color: '#fff',
            borderRadius: '100px',
            padding: '15px 60px',
            fontSize: '16px',
            fontWeight: 400,
            textDecoration: 'none',
            background: 'transparent',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
        >
          See All Features
        </a>
      </div>
    </section>
  );
}
