import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Wallet, 
  Shield, 
  BarChart3, 
  Database, 
  Layers, 
  Palette,
  ArrowRightLeft,
  Globe
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tech-item',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.tech-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const techCategories = [
    {
      title: 'Wallets & Security',
      items: [
        { name: 'MetaMask', icon: Wallet },
        { name: 'Rabby', icon: Wallet },
        { name: 'Ledger', icon: Shield },
      ],
    },
    {
      title: 'Analysis Tools',
      items: [
        { name: 'TradingView', icon: BarChart3 },
        { name: 'Dune Analytics', icon: Database },
        { name: 'Nansen', icon: BarChart3 },
      ],
    },
    {
      title: 'DeFi Infrastructure',
      items: [
        { name: 'Uniswap', icon: ArrowRightLeft },
        { name: 'Aave', icon: Layers },
        { name: 'LayerZero', icon: Globe },
        { name: 'Polygon', icon: Layers },
      ],
    },
    {
      title: 'Design Tools',
      items: [
        { name: 'Figma', icon: Palette },
        { name: 'Adobe CC', icon: Palette },
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-neon-cyan tracking-[0.3em] uppercase mb-4 block">
            The Powerhouse
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tech Stack &{' '}
            <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Battle-tested tools and platforms that power my daily operations.
          </p>
        </div>

        {/* Tech grid */}
        <div className="tech-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider pb-2 border-b border-border">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="tech-item flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border hover:border-neon-cyan/50 hover:bg-card transition-all duration-300 group cursor-default"
                  >
                    <div className="p-2 rounded-lg bg-secondary group-hover:bg-neon-cyan/10 transition-colors">
                      <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-foreground/90">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
