import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreLoaderProps {
  onComplete: () => void;
}

const PreLoader = ({ onComplete }: PreLoaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            if (preloaderRef.current) {
              preloaderRef.current.style.display = 'none';
            }
            onComplete();
          }
        });
      }
    });

    // Animate text reveal
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
    );

    // Animate progress bar with counter
    tl.to(
      { value: 0 },
      {
        value: 100,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
          const currentValue = Math.round(this.targets()[0].value);
          setProgress(currentValue);
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${currentValue}%`;
          }
        }
      },
      '-=0.3'
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/5 via-transparent to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl float" style={{ animationDelay: '-3s' }} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo text */}
        <div ref={textRef} className="flex flex-col items-center gap-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="gradient-text">RIZWAN</span>
          </h1>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
            Loading Experience
          </p>
        </div>

        {/* Progress container */}
        <div className="w-64 md:w-80 flex flex-col items-center gap-3">
          {/* Progress bar background */}
          <div className="w-full h-[2px] bg-border rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full transition-all duration-100"
              style={{ width: '0%' }}
            />
          </div>
          
          {/* Percentage */}
          <span ref={percentRef} className="text-neon-cyan font-medium tabular-nums">
            {progress}%
          </span>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-neon-cyan/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-neon-cyan/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-neon-cyan/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-neon-cyan/30" />
    </div>
  );
};

export default PreLoader;
