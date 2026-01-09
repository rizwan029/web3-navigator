import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ManifestoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.manifesto-text',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.manifesto-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative z-10 section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top line */}
          <div className="manifesto-line h-px w-24 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mb-12 origin-center" />

          {/* Quote */}
          <blockquote className="manifesto-text relative">
            <span className="absolute -top-8 left-0 text-6xl text-neon-cyan/20 font-serif">"</span>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground/90 italic">
              I believe in high-conviction strategies backed by data, not hype. 
              In the decentralized world,{' '}
              <span className="text-neon-cyan font-medium not-italic">Security</span>,{' '}
              <span className="text-neon-blue font-medium not-italic">Discipline</span>, and{' '}
              <span className="text-neon-purple font-medium not-italic">Innovation</span>{' '}
              are the ultimate currencies.
            </p>
            <span className="absolute -bottom-8 right-0 text-6xl text-neon-cyan/20 font-serif">"</span>
          </blockquote>

          {/* Bottom line */}
          <div className="manifesto-line h-px w-24 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mt-12 origin-center" />
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
