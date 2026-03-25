import LogoMarquee from '../ui/LogoMarquee';

export default function TrustedBy() {
  return (
    <section className="bg-white" style={{ padding: '60px 15px 20px' }}>
      <div className="max-w-[1200px] mx-auto text-center">
        <p
          className="font-['Inter'] uppercase mb-8"
          style={{
            fontSize: '16px',
            fontWeight: 400,
            color: 'rgb(23, 26, 29)',
            letterSpacing: '-0.1px',
          }}
        >
          TRUSTED BY
        </p>
        <LogoMarquee />
      </div>
    </section>
  );
}
