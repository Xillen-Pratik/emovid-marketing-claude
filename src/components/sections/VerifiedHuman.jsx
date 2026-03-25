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
          className="text-white/80 text-base max-w-[700px] mx-auto mb-8 font-['Inter']"
          style={{ lineHeight: 1.6 }}
        >
          Every Emovid includes our patented Verified Human Communication&trade; seal to confirm
          it&rsquo;s truly from you: protected, tamper-proof, and verified.
        </p>

        <a
          href="#features"
          className="inline-block border border-white text-white rounded-full px-16 py-4 text-base hover:bg-white hover:text-black transition bg-transparent font-['Inter']"
        >
          See All Features
        </a>
      </div>
    </section>
  );
}
