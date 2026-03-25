import youRecordImg from '../../assets/images/how-it-works/you-record.jpg';
import emovidDoesWorkImg from '../../assets/images/how-it-works/emovid-does-work.png';
import theyReplyImg from '../../assets/images/how-it-works/they-reply.jpg';
import mdiVideo from '../../assets/images/icons/mdi-video.svg';
import mdiEmailFast from '../../assets/images/icons/mdi-email-fast.svg';
import mdiMessageReply from '../../assets/images/icons/mdi-message-reply.svg';

const steps = [
  {
    title: 'You Record',
    description:
      'Speak to camera and share updates in seconds. No setup or scheduling. Content lives at a secure URL that embeds anywhere for meaningful, actionable conversations.',
    image: youRecordImg,
    icon: mdiVideo,
  },
  {
    title: 'Emovid Does the Work',
    description:
      'Your message becomes a secure, Verified Human Communication\u2122 with a concise AI summary, AI transcript, and with translation for global communication.',
    image: emovidDoesWorkImg,
    icon: mdiEmailFast,
  },
  {
    title: 'They Reply\u2014On Their Time',
    description:
      'You can see who viewed the video, recipients watch on their own time, respond by audio or video, and Emovid analysis multi-threads replies instantly for clarity and speed.',
    image: theyReplyImg,
    icon: mdiMessageReply,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white" style={{ padding: '50px 15px' }}>
      <div className="max-w-[1200px] mx-auto text-center px-4">
        <p
          className="font-['Inter'] uppercase mb-4"
          style={{
            fontSize: '16px',
            fontWeight: 300,
            color: 'rgb(125, 127, 131)',
            letterSpacing: '-0.1px',
          }}
        >
          FACE-TO-FACE WITHOUT THE MEETING
        </p>
        <h2
          className="font-['Manrope'] text-[28px] sm:text-[34px] lg:text-[40px] font-semibold mb-12"
          style={{
            color: 'rgb(17, 17, 17)',
            letterSpacing: '-0.1px',
            marginTop: '16px',
          }}
        >
          How Emovid works
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '48px' }}
        >
          {steps.map((step, i) => (
            <div key={i} className="text-left">
              {/* Image - browser chrome is baked into the image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto"
                  style={{ display: 'block', objectFit: 'fill' }}
                />
              </div>

              {/* Icon + Title */}
              <div
                className="flex items-center mt-6"
                style={{ gap: '12px', marginBottom: '16px' }}
              >
                <img
                  src={step.icon}
                  alt=""
                  style={{
                    width: '36px',
                    height: '36px',
                    flexShrink: 0,
                  }}
                />
                <h3
                  className="font-['Manrope']"
                  style={{
                    fontSize: 'clamp(15.2px, 0.95rem + ((1vw - 3.2px) * 0.887), 23px)',
                    fontWeight: 600,
                    color: 'rgb(17, 17, 17)',
                    lineHeight: '25.875px',
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="font-['Inter']"
                style={{
                  fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.568), 19px)',
                  fontWeight: 400,
                  color: 'rgb(0, 0, 0)',
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
