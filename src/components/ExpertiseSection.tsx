import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Search, Users, Palette } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ExpertiseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.expertise-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.expertise-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const expertise = [
    {
      icon: TrendingUp,
      title: 'Crypto Investment & Alpha Trading',
      description: 'Capital allocation, risk management, and futures market analysis with institutional-grade strategies.',
      focus: 'Capital Allocation • Risk Management • Market Analysis',
      color: 'from-neon-cyan to-neon-blue',
    },
    {
      icon: Search,
      title: 'Web3 Hunting & DApps Ecosystem',
      description: 'Testnet exploration, smart contract interaction, and strategic airdrop positioning.',
      focus: 'Testnet Exploration • Smart Contracts • Airdrop Strategy',
      color: 'from-neon-blue to-neon-purple',
    },
    {
      icon: Users,
      title: 'Digital Marketing & Community Growth',
      description: 'Growth hacking for DeFi protocols and developer funding liaison with proven results.',
      focus: 'Growth Hacking • DeFi Protocols • Funding Liaison',
      color: 'from-neon-purple to-pink-500',
    },
    {
      icon: Palette,
      title: 'Web3 Graphic Design & UI/UX',
      description: 'Creating visual identities and intuitive interfaces for the decentralized web.',
      focus: 'Visual Identity • UI/UX Design • Brand Systems',
      color: 'from-pink-500 to-neon-cyan',
    },
  ];

  return (
    <section ref={sectionRef} id="expertise" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative z-10 section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-neon-cyan tracking-[0.3em] uppercase mb-4 block">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Core{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Four pillars of specialized knowledge that drive value in the decentralized economy.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="expertise-grid grid md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="expertise-card glow-card rounded-2xl p-8 group relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-6`}>
                <item.icon className="w-6 h-6 text-background" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Focus areas */}
              <div className="text-xs text-muted-foreground/70 tracking-wide uppercase">
                {item.focus}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
