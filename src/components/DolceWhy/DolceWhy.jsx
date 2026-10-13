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
      <div className="dolce-why-wrapper">
        <div className="dolce-why-heading">
          <Copy><p className="dolce-why-label">Por que aprender com a Dolce.me?</p></Copy>
          <Copy><h2>Um curso que nasceu da prática, não apenas das receitas.</h2></Copy>
          <img className="dolce-why-mentor" src="/dolce/mentor-matheus.png" alt="Matheus, mentor da Dolce.me, preparando uma receita" />
        </div>

        <div className="dolce-why-copy">
          <Copy><p>Na Dolce.me, os picolés passaram por testes, ajustes e pelo desafio de conquistar os clientes de uma confeitaria de verdade.</p></Copy>
          <div className="dolce-why-result" ref={resultRef}>
            <strong aria-label={`Mais de ${soldCount} picolés vendidos`}>+ de {soldCount}</strong>
            <span>picolés vendidos em menos de um mês.</span>
          </div>
          <Copy><p>Esse foi o resultado que alcançamos após levar nossos picolés para o cardápio da confeitaria.</p></Copy>
          <Copy><p>E é parte dessa experiência que queremos compartilhar com você.</p></Copy>
          <Copy><p>O Descomplicando Picolés reúne o conhecimento que desenvolvemos sobre ingredientes, técnicas e processos de produção para que você também possa aprender a criar picolés com mais segurança e autonomia.</p></Copy>
          <Copy><p className="dolce-why-closing">Porque saber reproduzir uma receita é importante. Mas entender o que você está fazendo abre possibilidades para criar muito mais.</p></Copy>
          <a className="hero-premium-cta dolce-why-cta" href="https://pay.kiwify.com.br/MzpjRKm" target="_blank" rel="noreferrer">
            <span>Quero aprender agora</span>
            <span className="hero-premium-cta-icon" aria-hidden="true"><img src="/dolce/popsicle-icon-pink-hq.png" alt="" /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
