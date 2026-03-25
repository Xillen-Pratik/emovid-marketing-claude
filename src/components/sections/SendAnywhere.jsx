import outlookIcon from '../../assets/images/integrations/outlook.svg';
import gmailIcon from '../../assets/images/integrations/gmail.svg';
import slackIcon from '../../assets/images/integrations/slack.svg';
import teamsIcon from '../../assets/images/integrations/teams.svg';
import googleChatIcon from '../../assets/images/integrations/google-chat.svg';
import salesforceIcon from '../../assets/images/integrations/salesforce.svg';
import hubspotIcon from '../../assets/images/integrations/hubspot.svg';
import imessageIcon from '../../assets/images/integrations/imessage.svg';
import whatsappIcon from '../../assets/images/integrations/whatsapp.svg';
import messengerIcon from '../../assets/images/integrations/messenger.svg';
import linkedinIcon from '../../assets/images/integrations/linkedin.svg';
import xIcon from '../../assets/images/integrations/x.svg';
import facebookIcon from '../../assets/images/integrations/facebook.svg';
import blueskyIcon from '../../assets/images/integrations/bluesky.svg';
import discordIcon from '../../assets/images/integrations/discord.svg';
import signalIcon from '../../assets/images/integrations/signal.svg';

const row1Groups = [
  {
    name: 'Email',
    icons: [
      { src: outlookIcon, alt: 'Outlook' },
      { src: gmailIcon, alt: 'Gmail' },
    ],
    hasSeparator: true,
  },
  {
    name: 'Chat',
    icons: [
      { src: slackIcon, alt: 'Slack' },
      { src: teamsIcon, alt: 'Teams' },
      { src: googleChatIcon, alt: 'Google Chat' },
    ],
    hasSeparator: true,
  },
  {
    name: 'CRM',
    icons: [
      { src: salesforceIcon, alt: 'Salesforce' },
      { src: hubspotIcon, alt: 'HubSpot' },
    ],
    hasSeparator: false,
  },
];

const row2Groups = [
  {
    name: 'Messaging',
    icons: [
      { src: imessageIcon, alt: 'iMessage' },
      { src: whatsappIcon, alt: 'WhatsApp' },
      { src: signalIcon, alt: 'Signal' },
      { src: messengerIcon, alt: 'Messenger' },
    ],
    hasSeparator: true,
  },
  {
    name: 'Social',
    icons: [
      { src: linkedinIcon, alt: 'LinkedIn' },
      { src: xIcon, alt: 'X' },
      { src: facebookIcon, alt: 'Facebook' },
      { src: blueskyIcon, alt: 'Bluesky' },
      { src: discordIcon, alt: 'Discord' },
    ],
    hasSeparator: false,
  },
];

function IconGroup({ group }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`logo-row flex items-center justify-center flex-wrap ${group.hasSeparator ? 'send-separator' : ''}`}
        style={{ gap: '10px' }}
      >
        {group.icons.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            alt={icon.alt}
            width="86"
            height="86"
            style={{
              width: '86px',
              height: '86px',
              objectFit: 'contain',
            }}
          />
        ))}
      </div>
      <p
        className="font-['Inter']"
        style={{
          fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.568), 19px)',
          fontWeight: 400,
          color: 'rgb(0, 0, 0)',
          textAlign: 'center',
          marginTop: '8px',
          marginBottom: 0,
        }}
      >
        {group.name}
      </p>
    </div>
  );
}

export default function SendAnywhere() {
  return (
    <section className="bg-white" style={{ padding: '50px 15px' }}>
      <div className="max-w-[1200px] mx-auto text-center px-4">
        <h2
          className="font-['Manrope']"
          style={{
            fontSize: 'clamp(20.515px, 1.282rem + ((1vw - 3.2px) * 1.419), 33px)',
            fontWeight: 600,
            color: 'rgb(17, 17, 17)',
            lineHeight: 1.3,
            marginBottom: 0,
            paddingBottom: 0,
          }}
        >
          Send anywhere, and stay in your flow
        </h2>

        <p
          className="font-['Inter']"
          style={{
            fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.227), 16px)',
            fontWeight: 400,
            color: 'rgb(82, 85, 90)',
            paddingTop: '16px',
            paddingBottom: '40px',
            margin: 0,
          }}
        >
          No installs for recipients. Admin controls and privacy built in.
        </p>

        <div className="flex items-start justify-center flex-wrap">
          {row1Groups.map((group, i) => (
            <IconGroup key={i} group={group} />
          ))}
        </div>

        <div className="flex items-start justify-center flex-wrap" style={{ marginTop: '20px' }}>
          {row2Groups.map((group, i) => (
            <IconGroup key={i} group={group} />
          ))}
        </div>

        <div style={{ marginTop: '48px' }}>
          <a
            href="https://app.emovid.com/?plan=business&duration=annually"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(151.21deg, rgb(161, 45, 58) 17.63%, rgb(107, 23, 33) 79.47%)',
              color: '#fff',
              borderRadius: '100px',
              padding: '15px 60px',
              fontSize: '16px',
              fontWeight: 300,
              fontFamily: "'Inter', sans-serif",
              textDecoration: 'none',
              border: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            Get Started Free
          </a>
        </div>

        <p
          className="font-['Inter']"
          style={{ fontSize: '14px', color: 'rgb(82, 85, 90)', paddingTop: '16px', margin: 0 }}
        >
          No credit card required.
        </p>
      </div>
    </section>
  );
}
