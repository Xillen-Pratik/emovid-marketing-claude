import React, { useState } from 'react';
import verifiedHumanImg from '../../assets/images/hero/verified-human.png';
import sealLogoSvg from '../../assets/images/hero/emovid-seal-logo.svg';

const checklistItems = [
  'Live recording verified',
  'Original video verified',
  'Original audio verified',
  'Encryption applied',
];

const detailRows = [
  { label: 'Recorded', value: '03/02/2026, 12:25 PM' },
  { label: 'Sent', value: '03/02/2026, 12:26 PM' },
  { label: 'Source', value: 'Acme.com' },
  { label: 'Account', value: 'sam@acme.com' },
];

function GreenCheck() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="flex-shrink-0"
    >
      <circle cx="9" cy="9" r="9" fill="#319B0A" />
      <path
        d="M5 9.5L7.5 12L13 6.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function VerifiedSealCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className="card-wrapper"
      id="cardWrapper"
      onClick={handleToggle}
      style={{
        position: 'relative',
        width: '250px',
        paddingTop: '50px',
        cursor: 'pointer',
        userSelect: 'none',
        zIndex: 12,
        margin: '0 auto',
      }}
    >
      {/* Badge */}
      <div
        className="badge-container"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '100px',
          zIndex: 10,
        }}
      >
        <img
          src={verifiedHumanImg}
          alt="Verified Human"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            zIndex: 5,
          }}
        />
        {[0, 0.8, 1.6].map((delay, i) => (
          <span
            key={i}
            className="ripple-ring"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: '2.5px solid rgba(49,155,10,0.55)',
              background: 'transparent',
              animation: 'ripple 2.4s ease-out infinite',
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>

      {/* Card */}
      <div
        className={`card ${isExpanded ? 'is-open' : ''}`}
        id="mainCard"
        style={{
          background: '#fff',
          border: 0,
          borderRadius: '18px',
          overflow: 'hidden',
          transition: 'transform 0.3s',
        }}
      >
        {/* Card body */}
        <div
          className="card-body"
          style={{
            paddingTop: '58px',
            background: 'rgb(242, 255, 237)',
            borderRadius: '18px 18px 0 0',
          }}
        >
          {/* Header */}
          <div
            className="card-header"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              margin: '16px 0',
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                color: '#111',
                fontSize: '16px',
                margin: 0,
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Security Details
            </h3>
            <svg
              className={`chevron ${isExpanded ? 'open' : ''}`}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#555"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transition: 'transform 0.35s',
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          {/* Checklist */}
          <ul
            className="check-list"
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              paddingLeft: '44px',
              marginTop: 0,
              marginBottom: 0,
              paddingBottom: '4px',
            }}
          >
            {checklistItems.map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 600,
                  color: 'rgb(88, 88, 88)',
                  fontSize: '13px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <GreenCheck />
                {item}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div
            style={{
              borderTop: '1px solid rgb(224, 224, 224)',
              margin: '14px 0 0',
            }}
          />
        </div>

        {/* Expandable section */}
        <div
          className={`expandable ${isExpanded ? 'open' : ''}`}
          id="expandable"
          style={{
            overflow: 'hidden',
            maxHeight: isExpanded ? '400px' : '0',
            opacity: isExpanded ? 1 : 0,
            background: '#fff',
            padding: isExpanded ? '0 15px' : '0 15px',
            borderRadius: '0 0 18px 18px',
            transition: 'max-height 0.45s ease, opacity 0.4s ease',
          }}
        >
          <div style={{ padding: '15px 0 0' }}>
            {/* Meta table */}
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginBottom: '4px',
              }}
            >
              <tbody>
                {detailRows.map((row) => (
                  <tr key={row.label}>
                    <td
                      style={{
                        color: '#000',
                        padding: '3px 0',
                        fontSize: '12px',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        paddingRight: '4px',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {row.label}
                    </td>
                    <td
                      style={{
                        paddingRight: '5px',
                        width: '10px',
                        fontSize: '12px',
                        color: '#000',
                        padding: '3px 0',
                      }}
                    >
                      :
                    </td>
                    <td
                      style={{
                        fontWeight: 500,
                        textAlign: 'left',
                        fontSize: '12px',
                        color: '#000',
                        padding: '3px 0',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* No effects notice */}
            <div
              style={{
                fontWeight: 500,
                color: '#000',
                textAlign: 'center',
                padding: '10px 0 2px',
                borderTop: '1px solid rgb(224, 224, 224)',
                marginTop: '8px',
                marginBottom: '10px',
                fontSize: '12px',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              No effects were used in this recording
            </div>

            {/* Emovid branding row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '7px',
                justifyContent: 'center',
                padding: '10px 0 14px',
              }}
            >
              <img
                src={sealLogoSvg}
                alt="Emovid"
                style={{ width: '24px', height: '24px', flexShrink: 0 }}
              />
              <div>
                <p
                  style={{
                    fontSize: '9px',
                    color: '#888',
                    margin: 0,
                    lineHeight: 1.3,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Patented verified human technology
                  <br />
                  that eliminates deep fakes and fraud.
                </p>
                <p
                  style={{
                    fontSize: '9px',
                    color: '#aaa',
                    margin: '4px 0 0',
                    fontStyle: 'italic',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  2026 Emovid Corporation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsed footer */}
        {!isExpanded && (
          <div
            className="collapsed-footer"
            style={{
              background: 'rgb(26, 92, 14)',
              color: 'rgba(255, 255, 255, 0.52)',
              textAlign: 'center',
              padding: '11px 0',
              borderRadius: '0 0 18px 18px',
              fontSize: '12px',
              fontFamily: "'Inter', sans-serif",
              animation: 'text-blink 2s ease-in-out infinite',
              transition: 'background 0.15s',
            }}
          >
            Click to view details
          </div>
        )}
      </div>
    </div>
  );
}
