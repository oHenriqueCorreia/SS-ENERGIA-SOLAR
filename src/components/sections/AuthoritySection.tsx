"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ from, to, duration, suffix = "", prefix = "" }: { from: number, to: number, duration: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        // Easing function (easeOutExpo)
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeOut * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export function AuthoritySection() {
  const stats = [
    { id: 1, name: 'Projetos Realizados', value: 850, suffix: '+', prefix: '' },
    { id: 2, name: 'Clientes Atendidos', value: 1200, suffix: '+', prefix: '' },
    { id: 3, name: 'Anos no Mercado', value: 6, suffix: '+', prefix: '' },
    { id: 4, name: 'Economia Gerada', value: 15, suffix: ' Milhões', prefix: 'R$ ' },
  ];

  return (
    <section className="py-12 md:py-16 bg-card/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center justify-center text-center py-6 px-2 md:p-4
                ${index % 2 === 0 ? 'border-r border-white/10 md:border-r-0' : ''}
                ${index < 2 ? 'border-b border-white/10 md:border-b-0' : ''}
              `}
            >
              <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-primary mb-1 md:mb-3 leading-tight">
                <Counter from={0} to={stat.value} duration={2.5} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-[10px] sm:text-xs md:text-base font-medium text-muted-foreground uppercase tracking-wider leading-snug">
                {stat.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
