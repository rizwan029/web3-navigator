import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Fingerprint, Key, FileWarning, CheckCircle2, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SecuritySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.security-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.security-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const securityFeatures = [
    {
      icon: Fingerprint,
      title: 'Sybil Detection Avoidance',
      description: 'Advanced IP management and unique transaction patterns to ensure wallet legitimacy.',
      points: ['Dynamic IP rotation', 'Organic activity timing', 'Unique behavioral patterns'],
    },
    {
      icon: Key,
      title: 'Hardware Wallet Security',
      description: 'All high-value assets secured with Ledger/Trezor hardware wallets for maximum protection.',
      points: ['Cold storage for holdings', 'Multi-sig setups', 'Secure key management'],
    },
    {
      icon: FileWarning,
      title: 'Smart Contract Revoke',
      description: 'Regular auditing and revoking of unnecessary smart contract approvals to prevent exploits.',
      points: ['Weekly approval audits', 'Revoke.cash integration', 'Permission monitoring'],
    },
    {
      icon: Lock,
      title: 'Operational Security',
      description: 'Strict OpSec practices including dedicated devices, encrypted communications, and backup protocols.',
      points: ['Dedicated devices', 'Encrypted backups', 'Secure communications'],
    },
  ];

  const practices = [
    { icon: CheckCircle2, text: 'Never reuse wallets across sybil-sensitive protocols' },
    { icon: CheckCircle2, text: 'Maintain unique transaction volumes per wallet' },
    { icon: CheckCircle2, text: 'Regular security audits of all connected dApps' },
    { icon: CheckCircle2, text: 'Hardware wallet for all mainnet holdings' },
    { icon: CheckCircle2, text: 'Separate hot wallets for testnet activities' },
    { icon: CheckCircle2, text: 'Real-time monitoring of wallet permissions' },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-card/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-neon-cyan tracking-[0.3em] uppercase mb-4 block">
            Professional Standards
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Security &{' '}
            <span className="gradient-text">Sybil Resistance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What separates professional airdrop hunters from amateurs—rigorous security practices and intelligent activity management.
          </p>
        </div>

        {/* Shield Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neon-cyan/10 border border-neon-cyan/30">
            <Shield className="w-6 h-6 text-neon-cyan" />
            <span className="font-medium text-neon-cyan">Enterprise-Grade Security Protocols</span>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="security-grid grid md:grid-cols-2 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="security-card p-6 md:p-8 rounded-2xl bg-card/50 border border-border hover:border-neon-cyan/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                        <span className="text-foreground/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Best Practices */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 border border-neon-cyan/20">
          <h4 className="text-lg font-semibold mb-6 text-center text-foreground">Security Best Practices</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {practices.map((practice, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                <practice.icon className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90">{practice.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
