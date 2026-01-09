import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Boxes, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FocusNetworksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.network-card',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.networks-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const networkCategories = [
    {
      title: 'Layer 2 Solutions',
      icon: Layers,
      color: 'neon-cyan',
      networks: [
        { name: 'Arbitrum', status: 'Active', trending: false },
        { name: 'Optimism', status: 'Active', trending: false },
        { name: 'Base', status: 'Active', trending: true },
        { name: 'ZKsync', status: 'Grinding', trending: true },
        { name: 'Scroll', status: 'Active', trending: false },
        { name: 'Linea', status: 'Active', trending: false },
      ],
    },
    {
      title: 'Modular & L1',
      icon: Boxes,
      color: 'neon-purple',
      networks: [
        { name: 'Celestia', status: 'Claimed', trending: false },
        { name: 'Monad', status: 'Early Tester', trending: true },
        { name: 'Berachain', status: 'Testnet', trending: true },
        { name: 'Solana', status: 'Active', trending: false },
        { name: 'Sui', status: 'Active', trending: false },
        { name: 'Sei', status: 'Active', trending: false },
      ],
    },
    {
      title: 'Emerging Protocols',
      icon: Sparkles,
      color: 'neon-pink',
      networks: [
        { name: 'LayerZero', status: 'Grinding', trending: true },
        { name: 'Eigenlayer', status: 'Restaking', trending: true },
        { name: 'Hyperlane', status: 'Active', trending: false },
        { name: 'Wormhole', status: 'Active', trending: false },
        { name: 'Polyhedra', status: 'Active', trending: false },
        { name: 'zkLink', status: 'Active', trending: false },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'neon-cyan':
        return {
          bg: 'bg-neon-cyan/10',
          border: 'border-neon-cyan/30 hover:border-neon-cyan/50',
          text: 'text-neon-cyan',
          badge: 'bg-neon-cyan/20 text-neon-cyan',
        };
      case 'neon-purple':
        return {
          bg: 'bg-neon-purple/10',
          border: 'border-neon-purple/30 hover:border-neon-purple/50',
          text: 'text-neon-purple',
          badge: 'bg-neon-purple/20 text-neon-purple',
        };
      case 'neon-pink':
        return {
          bg: 'bg-neon-pink/10',
          border: 'border-neon-pink/30 hover:border-neon-pink/50',
          text: 'text-neon-pink',
          badge: 'bg-neon-pink/20 text-neon-pink',
        };
      default:
        return {
          bg: 'bg-neon-cyan/10',
          border: 'border-neon-cyan/30',
          text: 'text-neon-cyan',
          badge: 'bg-neon-cyan/20 text-neon-cyan',
        };
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-neon-pink tracking-[0.3em] uppercase mb-4 block">
            Ecosystem Focus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Focus{' '}
            <span className="gradient-text">Networks</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specializing in the most promising Layer 2s, modular blockchains, and emerging protocols of 2025/2026.
          </p>
        </div>

        {/* Networks Grid */}
        <div className="networks-grid grid lg:grid-cols-3 gap-8">
          {networkCategories.map((category, catIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <div key={catIndex} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-border">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    <category.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Network Cards */}
                <div className="grid grid-cols-2 gap-3">
                  {category.networks.map((network, netIndex) => (
                    <div
                      key={netIndex}
                      className={`network-card p-4 rounded-xl bg-card/50 border ${colors.border} transition-all duration-300 group cursor-default`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-medium text-foreground text-sm">{network.name}</span>
                        {network.trending && (
                          <span className="flex items-center gap-1 px-1.5 py-0.5 text-[9px] uppercase tracking-wider bg-neon-pink/20 text-neon-pink rounded">
                            <Sparkles className="w-2.5 h-2.5" />
                            Hot
                          </span>
                        )}
                      </div>
                      <span className={`text-xs ${colors.text}`}>{network.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            🔥 <span className="text-neon-pink">Hot</span> indicates protocols with upcoming TGE or high airdrop potential in 2025/2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default FocusNetworksSection;
