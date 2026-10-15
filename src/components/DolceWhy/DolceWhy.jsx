"use client";

import { useEffect, useRef, useState } from "react";
import Copy from "@/components/Copy/Copy";
import "./DolceWhy.css";

export default function DolceWhy() {
  const resultRef = useRef(null);
  const [soldCount, setSoldCount] = useState(0);

  useEffect(() => {
    const result = resultRef.current;
    if (!result) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setSoldCount(1000);
        return;
      }

      const duration = 1500;
      const start = performance.now();
      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setSoldCount(Math.round(1000 * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }, { threshold: 0.45 });

    observer.observe(result);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="dolce-why">
      <div className="dolce-why-seal" aria-hidden="true">
        <svg viewBox="0 0 200 200" role="presentation">
          <defs>
            <path id="dolce-why-seal-path" d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" />
          </defs>
          <text>
            <textPath href="#dolce-why-seal-path" startOffset="0%" textLength="515" lengthAdjust="spacing">
              <tspan>DESCOMPLICANDO </tspan>
              <tspan className="dolce-why-seal-pink">PICOLÉS</tspan>
              <tspan> · DESCOMPLICANDO </tspan>
              <tspan className="dolce-why-seal-pink">PICOLÉS</tspan>
              <tspan> ·</tspan>
            </textPath>
          </text>
        </svg>
        <span><img src="/dolce/popsicle-icon-pink-hq.png" alt="" /></span>
      </div>
      <div className="dolce-why-wrapper">
        <div className="dolce-why-heading">
          <Copy><p className="dolce-why-label">Por que aprender com a Dolce.me?</p></Copy>
          <Copy><h2>Um curso que nasceu da prática, não apenas das receitas.</h2></Copy>
          <div className="dolce-why-art">
            <img className="dolce-why-mentor" src="/dolce/course-platform-phones.avif" loading="lazy" decoding="async" alt="Aulas do curso Descomplicando Picolés em celular" />
          </div>
        </div>

        <div className="dolce-why-copy">
          <Copy><p>Na Dolce.me, os picolés passaram por testes, ajustes e pelo desafio de conquistar os clientes de uma confeitaria de verdade.</p></Copy>
          <div className="dolce-why-result" ref={resultRef}>
            <strong aria-label={`Mais de ${soldCount} picolés vendidos`}>+ de {soldCount}</strong>
            <span>picolés vendidos em menos de um mês.</span>
          </div>
          <div className="dolce-why-story">
            <Copy><p>Esse foi o <span className="dolce-why-highlight">resultado</span> que alcançamos após levar nossos picolés para o cardápio da confeitaria.</p></Copy>
            <Copy><p>E é parte dessa <span className="dolce-why-highlight">experiência</span> que queremos compartilhar com você.</p></Copy>
            <Copy><p>O Descomplicando Picolés reúne o conhecimento que desenvolvemos sobre ingredientes, <span className="dolce-why-highlight">técnicas e processos</span> de produção para que você também possa aprender a criar picolés com mais <span className="dolce-why-highlight">segurança e autonomia</span>.</p></Copy>
            <Copy><p className="dolce-why-closing">Porque saber reproduzir uma receita é importante. Mas entender o que você está fazendo abre possibilidades para criar muito mais.</p></Copy>
          </div>
          <a className="hero-premium-cta dolce-why-cta" href="https://pay.kiwify.com.br/MzpjRKm" target="_blank" rel="noreferrer">
            <span>Quero aprender agora</span>
            <span className="hero-premium-cta-icon" aria-hidden="true"><img src="/dolce/popsicle-icon-pink-hq.png" alt="" /></span>
          </a>
          <img className="dolce-why-course-logo" src="/dolce/curso-logo-trimmed.png" alt="Descomplicando Picolés" />
        </div>
      </div>
    </section>
  );
}
