import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, BadgeCheck, FileCheck, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CredentialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.credential-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.credentials-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const credentials = [
    {
      icon: Award,
      title: 'Certified Alpha Trader',
      subtitle: 'Elite Evaluation Achievement',
      description: 'Successfully passed rigorous evaluation process demonstrating consistent profitability and risk management skills.',
      badge: 'CERTIFIED',
    },
    {
      icon: BadgeCheck,
      title: 'Capital Allocation Securement',
      subtitle: 'Managed Live Capital',
      description: 'Entrusted with live capital management, demonstrating institutional-grade trading discipline and performance.',
      badge: 'VERIFIED',
    },
  ];

  return (
    <section ref={sectionRef} id="credentials" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative z-10 section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-neon-cyan tracking-[0.3em] uppercase mb-4 block">
            Proof of Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Credentials &{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verified certifications and achievements that validate my expertise in the Web3 space.
          </p>
        </div>

        {/* Credentials grid */}
        <div className="credentials-grid grid md:grid-cols-2 gap-8 mb-16">
          {credentials.map((item, index) => (
            <div
              key={index}
              className="credential-card glow-card rounded-2xl p-8 relative overflow-hidden group"
            >
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 text-xs font-semibold bg-neon-cyan/20 text-neon-cyan rounded-full border border-neon-cyan/30">
                  {item.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 mb-6">
                <item.icon className="w-8 h-8 text-neon-cyan" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-neon-cyan mb-4">{item.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Case study */}
        <div className="glow-card rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-neon-purple/20">
              <FileCheck className="w-6 h-6 text-neon-purple" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Case Study</h3>
              <span className="text-sm text-muted-foreground">Protocol Participation</span>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Participated in early-stage funding and testnet phases for major DeFi protocols, 
            securing high-tier allocations through strategic timing and comprehensive protocol analysis. 
            Demonstrated ability to identify promising projects before mainstream adoption.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Early Access', 'DeFi Protocols', 'High-Tier Allocation', 'Strategic Analysis'].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
