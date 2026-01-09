import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Trophy, Zap, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AirdropTrackRecordSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.track-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.track-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const trackRecord = [
    {
      project: 'Aptos',
      status: 'Claimed',
      type: 'Mainnet Airdrop',
      highlight: true,
    },
    {
      project: 'Arbitrum (ARB)',
      status: 'Claimed',
      type: 'Governance Token',
      highlight: true,
    },
    {
      project: 'Celestia (TIA)',
      status: 'Claimed',
      type: 'Modular Blockchain',
      highlight: true,
    },
    {
      project: 'Jupiter (JUP)',
      status: 'Claimed',
      type: 'Solana DEX Aggregator',
      highlight: true,
    },
    {
      project: 'Grass',
      status: 'Claimed',
      type: 'DePIN Network',
      highlight: true,
    },
    {
      project: 'ZKsync',
      status: 'Active Participant',
      type: 'ZK Rollup - Top 5%',
      highlight: false,
    },
    {
      project: 'Monad',
      status: 'Early Tester',
      type: 'High-Performance L1',
      highlight: false,
    },
    {
      project: 'Berachain',
      status: 'Testnet Active',
      type: 'Proof of Liquidity',
      highlight: false,
    },
  ];

  const stats = [
    { icon: Trophy, value: '5+', label: 'Major Airdrops Claimed' },
    { icon: Zap, value: 'Top 5%', label: 'Active User Ranking' },
    { icon: Target, value: '15+', label: 'Protocols Engaged' },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-neon-cyan tracking-[0.3em] uppercase mb-4 block">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Airdrop{' '}
            <span className="gradient-text">Track Record</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Successfully qualified and claimed rewards from major Web3 protocols through strategic on-chain activity.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 md:p-6 rounded-xl bg-card/30 border border-border">
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-neon-cyan mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Track Record Grid */}
        <div className="track-grid grid md:grid-cols-2 gap-4">
          {trackRecord.map((item, index) => (
            <div
              key={index}
              className={`track-item flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 group ${
                item.highlight
                  ? 'bg-neon-cyan/5 border-neon-cyan/30 hover:border-neon-cyan/50'
                  : 'bg-card/30 border-border hover:border-neon-cyan/30'
              }`}
            >
              <div className={`p-2 rounded-lg ${item.highlight ? 'bg-neon-cyan/20' : 'bg-secondary'}`}>
                <CheckCircle2 className={`w-5 h-5 ${item.highlight ? 'text-neon-cyan' : 'text-muted-foreground'}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-foreground">{item.project}</h4>
                  {item.highlight && (
                    <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-neon-cyan/20 text-neon-cyan rounded-full">
                      Claimed
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{item.type}</p>
              </div>
              <span className={`text-xs font-medium ${item.highlight ? 'text-neon-cyan' : 'text-muted-foreground'}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirdropTrackRecordSection;
