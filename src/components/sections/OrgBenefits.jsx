import iconRoi from '../../assets/images/org-benefits/icon-roi.svg';
import iconRisk from '../../assets/images/org-benefits/icon-risk.svg';
import iconCompetitive from '../../assets/images/org-benefits/icon-competitive.svg';
import iconGlobal from '../../assets/images/org-benefits/icon-global.svg';
import iconRelationship from '../../assets/images/org-benefits/icon-relationship.svg';

const benefits = [
  {
    icon: iconRoi,
    title: 'Immediate ROI',
    description: 'Save up to 10 hours per employee per week',
  },
  {
    icon: iconRisk,
    title: 'Risk Mitigation',
    description: 'Protect against deepfake and fraud',
  },
  {
    icon: iconCompetitive,
    title: 'Competitive Edge',
    description: 'Accelerate communication cycles by 20-30%',
  },
  {
    icon: iconGlobal,
    title: 'Global Collaboration',
    description: 'Enable connections across time zones',
  },
  {
    icon: iconRelationship,
    title: 'Relationship Building',
    description: 'Create deeper, more authentic business relationships',
  },
];

export default function OrgBenefits() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Heading - centered */}
        <h4
          className="font-['Manrope'] text-center"
          style={{
            fontSize: 'clamp(22px, 1.375rem + ((1vw - 3.2px) * 0.682), 28px)',
            fontWeight: 600,
            color: 'rgb(17, 17, 17)',
            marginBottom: '48px',
          }}
        >
          For your organization, Emovid means:
        </h4>

        {/* Benefits row - left aligned items */}
        <div
          className="org-benefits-row"
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '50px',
            justifyContent: 'center',
          }}
        >
          {benefits.map((item, index) => (
            <div
              key={index}
              className="org-benefit-item"
              style={{
                flex: '1 1 0',
                minWidth: 0,
                textAlign: 'left',
              }}
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.title}
                style={{
                  width: '56px',
                  height: '56px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                }}
              />

              {/* Title */}
              <p
                className="font-['Manrope']"
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'rgb(17, 17, 17)',
                  margin: '0 0 8px',
                }}
              >
                {item.title}
              </p>

              {/* Description */}
              <p
                className="font-['Inter']"
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgb(82, 85, 90)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
