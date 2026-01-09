import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, TrendingUp, Palette, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Web3 Consultation',
      description: 'Comprehensive airdrop strategy and protocol analysis to maximize your Web3 opportunities.',
      features: ['Airdrop Strategy', 'Protocol Analysis', 'Risk Assessment', 'Portfolio Review'],
      color: 'neon-cyan',
    },
    {
      icon: TrendingUp,
      title: 'Proprietary Trading',
      description: 'Disciplined market execution and risk mitigation with institutional-grade strategies.',
      features: ['Market Execution', 'Risk Mitigation', 'Position Sizing', 'Performance Analytics'],
      color: 'neon-blue',
    },
    {
      icon: Palette,
      title: 'Creative Branding',
      description: 'Visual assets and brand systems designed specifically for blockchain startups and DAOs.',
      features: ['Brand Identity', 'UI/UX Design', 'Visual Assets', 'Design Systems'],
      color: 'neon-purple',
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="relative py-20 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-neon-cyan tracking-[0.3em] uppercase mb-4 block">
            Work With Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions to help you navigate and succeed in the decentralized economy.
          </p>
        </div>

        {/* Services grid */}
        <div className="services-grid grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card glow-card rounded-2xl p-8 flex flex-col group"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-${service.color}/20 mb-6 w-fit`}>
                <service.icon className={`w-6 h-6 text-${service.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-1">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="flex items-center gap-2 text-sm font-medium text-neon-cyan group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
