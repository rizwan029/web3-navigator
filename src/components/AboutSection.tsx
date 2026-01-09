import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, TrendingUp, Layers, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.about-stats',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Shield, value: '4+', label: 'Years Experience', color: 'text-neon-cyan' },
    { icon: TrendingUp, value: '100+', label: 'Testnets Completed', color: 'text-neon-blue' },
    { icon: Layers, value: '50+', label: 'DApps Interacted', color: 'text-neon-purple' },
    { icon: Zap, value: '24/7', label: 'Market Analysis', color: 'text-neon-cyan' },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-20 md:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="about-content">
            <span className="text-sm text-neon-cyan tracking-[0.3em] uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Professional{' '}
              <span className="gradient-text">Profile</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                With over <span className="text-foreground font-medium">4 years of hands-on experience</span> in 
                the blockchain ecosystem, I have mastered the art of navigating complex testnets, 
                cross-chain bridges, and DApp interactions.
              </p>
              <p>
                As a <span className="text-neon-cyan font-medium">certified Alpha Trader</span>, I combine 
                technical "hunting" skills with institutional-grade risk management to identify 
                opportunities before they become mainstream.
              </p>
              <p>
                My approach bridges decentralized innovation with sustainable capital growth, 
                ensuring every strategy is backed by thorough research and disciplined execution.
              </p>
            </div>

            {/* Decorative element */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/50 to-transparent" />
              <span className="text-xs text-muted-foreground tracking-wider">BLOCKCHAIN NATIVE</span>
            </div>
          </div>

          {/* Right - Stats grid */}
          <div className="about-stats grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glow-card p-6 rounded-xl text-center group"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4 transition-transform group-hover:scale-110`} />
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
