import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowDown, Briefcase, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content
      gsap.fromTo(
        '.hero-title',
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, delay: 0.2, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.hero-description',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.hero-buttons',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.9, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.hero-scroll',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 1.2, ease: 'power3.out' }
      );

      // Floating glow orbs
      gsap.to('.glow-orb-1', {
        y: -30,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to('.glow-orb-2', {
        y: 20,
        x: -20,
        duration: 5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/orb-Xpz9U8CUVC4Xmof5gjx0kCWq5/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="opacity-70"
          title="3D Background"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Floating glow orbs */}
      <div className="glow-orb-1 absolute top-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="glow-orb-2 absolute bottom-1/3 left-1/4 w-80 h-80 bg-neon-blue/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 section-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <p className="hero-subtitle text-sm md:text-base text-neon-cyan tracking-[0.3em] uppercase mb-6">
            Web3 Specialist • Certified Alpha Trader
          </p>

          {/* Main headline */}
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Architecting the{' '}
            <span className="gradient-text glow-text">Next Evolution</span>
            <br />
            of Web3
          </h1>

          {/* Description */}
          <p className="hero-description text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Hi, I'm <span className="text-foreground font-medium">Rizwan</span>. I bridge the gap between 
            decentralized innovation and sustainable capital growth with 4+ years of blockchain expertise.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => scrollToSection('#credentials')}
              className="btn-glow px-8 py-6 text-base"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="btn-outline-glow px-8 py-6 text-base"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Let's Talk
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground tracking-wider uppercase">Scroll</span>
          <ArrowDown className="h-5 w-5 text-neon-cyan animate-bounce" />
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent to-neon-cyan/30" />
      <div className="absolute top-0 right-1/4 w-px h-48 bg-gradient-to-b from-transparent to-neon-blue/30" />
    </section>
  );
};

export default HeroSection;
