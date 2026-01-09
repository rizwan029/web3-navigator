import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Twitter, 
  Send, 
  Linkedin, 
  Fuel, 
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

const Footer = () => {
  const [ethGas, setEthGas] = useState<number | null>(null);
  const [btcPrice, setBtcPrice] = useState<number | null>(null);

  useEffect(() => {
    // Simulated live data (in production, connect to real APIs)
    const fetchData = () => {
      // Simulated values
      setEthGas(Math.floor(Math.random() * 20) + 10);
      setBtcPrice(Math.floor(Math.random() * 5000) + 95000);
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'X (Twitter)' },
    { icon: Send, href: '#', label: 'Telegram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative py-20 md:py-32 border-t border-border">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />

      <div className="relative z-10 section-container">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Lead the{' '}
            <span className="gradient-text">Decentralized Revolution</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Currently accepting freelance projects and strategic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="btn-glow px-8 py-6 text-base">
              Start a Project
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="btn-outline-glow px-8 py-6 text-base">
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

        {/* Bottom section */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold gradient-text mb-2 block">
              RIZWANGALAKX.CO
            </span>
            <p className="text-sm text-muted-foreground">
              © 2026 All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="p-3 rounded-xl bg-card border border-border hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
              </a>
            ))}
          </div>

          {/* Live data widgets */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border">
              <Fuel className="w-4 h-4 text-neon-cyan" />
              <span className="text-xs text-muted-foreground">ETH Gas:</span>
              <span className="text-sm font-medium text-foreground">
                {ethGas ?? '--'} Gwei
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border">
              <TrendingUp className="w-4 h-4 text-neon-blue" />
              <span className="text-xs text-muted-foreground">BTC:</span>
              <span className="text-sm font-medium text-foreground">
                ${btcPrice?.toLocaleString() ?? '--'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <button onClick={() => scrollToSection('#home')} className="hover:text-foreground transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('#about')} className="hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('#expertise')} className="hover:text-foreground transition-colors">
              Expertise
            </button>
            <button onClick={() => scrollToSection('#credentials')} className="hover:text-foreground transition-colors">
              Credentials
            </button>
            <button onClick={() => scrollToSection('#services')} className="hover:text-foreground transition-colors">
              Services
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
