import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, ShieldCheck, Activity, Bell, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HuntingMethodologySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate methodology steps
      gsap.fromTo(
        '.method-step',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.method-container',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate connecting lines
      gsap.fromTo(
        '.method-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.4,
          stagger: 0.2,
          delay: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.method-container',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const methodology = [
    {
      step: '01',
      icon: Search,
      title: 'Project Discovery',
      description: 'Deep research on protocols with fresh Seed/Series A funding. Identifying high-potential ecosystems before mainstream awareness.',
      keywords: ['Funding Analysis', 'Team Vetting', 'Tokenomics Review'],
    },
    {
      step: '02',
      icon: ShieldCheck,
      title: 'Risk & Sybil Assessment',
      description: 'Ensuring wallet security and unique activity patterns. Strategic gas management and anti-detection protocols.',
      keywords: ['IP Management', 'Unique Patterns', 'Gas Optimization'],
    },
    {
      step: '03',
      icon: Activity,
      title: 'On-Chain Activity',
      description: 'Consistent mainnet grinding across bridges, swaps, staking, and DAO governance. Building organic transaction volume.',
      keywords: ['Bridge Activity', 'DEX Trading', 'Governance Voting'],
    },
    {
      step: '04',
      icon: Bell,
      title: 'Monitoring & Claim',
      description: 'Real-time tracking of snapshot announcements and claim windows. Never missing an eligibility deadline.',
      keywords: ['Snapshot Alerts', 'Claim Tracking', 'Portfolio Updates'],
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-card/20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-neon-purple tracking-[0.3em] uppercase mb-4 block">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hunting{' '}
            <span className="gradient-text">Methodology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A systematic, data-driven approach to identifying and qualifying for the most lucrative Web3 opportunities.
          </p>
        </div>

        {/* Strategic Quote */}
        <div className="max-w-3xl mx-auto mb-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5 border border-neon-cyan/20">
          <p className="text-lg md:text-xl text-center text-foreground/90 italic leading-relaxed">
            "I don't just chase airdrops; I analyze ecosystems. By identifying high-potential protocols early in their development, I execute precise on-chain strategies—from cross-chain bridging to governance participation—to secure maximum allocations while maintaining strict wallet security and sybil-resistant patterns."
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="method-container grid md:grid-cols-4 gap-6 relative">
          {methodology.map((item, index) => (
            <div key={index} className="relative">
              {/* Connecting line (hidden on mobile) */}
              {index < methodology.length - 1 && (
                <div className="method-line hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-neon-cyan/50 to-transparent origin-left z-0" />
              )}
              
              <div className="method-step relative z-10 p-6 rounded-xl bg-card/50 border border-border hover:border-neon-cyan/50 transition-all duration-300 group h-full">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-background border border-neon-cyan/50 flex items-center justify-center">
                  <span className="text-xs font-bold text-neon-cyan">{item.step}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-neon-cyan/10 flex items-center justify-center mb-4 group-hover:bg-neon-cyan/20 transition-colors">
                  <item.icon className="w-7 h-7 text-neon-cyan" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
                  {item.keywords.map((keyword, kIndex) => (
                    <span
                      key={kIndex}
                      className="px-2 py-1 text-[10px] uppercase tracking-wider bg-secondary text-muted-foreground rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Glossary */}
        <div className="mt-16 p-6 rounded-xl bg-card/30 border border-border">
          <h4 className="text-sm font-semibold text-neon-cyan uppercase tracking-wider mb-4">Technical Glossary</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { term: 'Mainnet Grinding', def: 'Consistent activity on live networks' },
              { term: 'Governance Participation', def: 'Active voting via Snapshot.org' },
              { term: 'Volume Generation', def: 'Organic transaction volume strategy' },
              { term: 'Liquidity Provisioning', def: 'Providing assets to DeFi pools' },
            ].map((item, index) => (
              <div key={index} className="p-3 rounded-lg bg-secondary/50">
                <span className="text-sm font-medium text-foreground">{item.term}</span>
                <p className="text-xs text-muted-foreground mt-1">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HuntingMethodologySection;
