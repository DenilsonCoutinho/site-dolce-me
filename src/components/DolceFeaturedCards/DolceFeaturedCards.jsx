"use client";

import { useEffect, useRef, useState } from "react";
import Copy from "@/components/Copy/Copy";
import "./DolceFeaturedCards.css";

const carouselImages = [
  { src: "/dolce/pudim.png", alt: "Picolé cremoso recheado" },
  { src: "/dolce/morango.png", alt: "Picolé recheado de morango" },
  { src: "/dolce/montagem.png", alt: "Picolés em processo de montagem" },
  { src: "/dolce/hero.png", alt: "Produção de picolés da Dolce.me" },
];

function ImageSet({ hidden = false, setRef }) {
  return (
    <div className="dolce-image-set" aria-hidden={hidden || undefined} ref={setRef}>
      {carouselImages.map((image) => (
        <figure className="dolce-image-slide" key={image.src}>
          <img src={image.src} alt={hidden ? "" : image.alt} draggable="false" />
        </figure>
      ))}
    </div>
  );
}

function InfiniteImageCarousel() {
  const trackRef = useRef(null);
  const firstSetRef = useRef(null);
  const positionRef = useRef(0);
  const pointerRef = useRef(null);
  const lastFrameRef = useRef(null);
  const speedRef = useRef(-26);
  const [isDragging, setIsDragging] = useState(false);

  const paintTrack = () => {
    const setWidth = firstSetRef.current?.offsetWidth;
    if (!setWidth) return;
    while (positionRef.current <= -setWidth) positionRef.current += setWidth;
    while (positionRef.current > 0) positionRef.current -= setWidth;
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
  };

  useEffect(() => {
    let frame;
    const animate = (time) => {
      const previous = lastFrameRef.current ?? time;
      lastFrameRef.current = time;
      if (!pointerRef.current) {
        const elapsed = time - previous;
        speedRef.current += (-26 - speedRef.current) * Math.min(1, elapsed / 750);
        positionRef.current += (speedRef.current * elapsed) / 1000;
        paintTrack();
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handlePointerDown = (event) => {
    pointerRef.current = { id: event.pointerId, x: event.clientX, time: event.timeStamp };
    speedRef.current = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!pointerRef.current || pointerRef.current.id !== event.pointerId) return;
    const distance = event.clientX - pointerRef.current.x;
    const elapsed = Math.max(event.timeStamp - pointerRef.current.time, 16);
    positionRef.current += distance;
    speedRef.current = Math.max(-560, Math.min(560, (distance / elapsed) * 1000));
    pointerRef.current.x = event.clientX;
    pointerRef.current.time = event.timeStamp;
    paintTrack();
  };

  const handlePointerEnd = (event) => {
    if (!pointerRef.current || pointerRef.current.id !== event.pointerId) return;
    pointerRef.current = null;
    setIsDragging(false);
  };

  return (
    <div className="dolce-image-carousel" aria-label="Picolés produzidos pela Dolce.me">
      <div
        className={`dolce-image-track${isDragging ? " is-dragging" : ""}`}
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        <ImageSet setRef={firstSetRef} />
        <ImageSet hidden />
      </div>
    </div>
  );
}

export default function DolceFeaturedCards() {
  return (
    <section className="dolce-featured-cards">
      <div className="container">
        <div className="dolce-featured-cards-wrapper">
          <div className="dolce-featured-cards-header">
            <div className="dolce-featured-title">
              <Copy><p className="sm dolce-featured-label">Por que aprender com a Dolce.me?</p></Copy>
              <Copy><h2>Um curso que nasceu da prática, não apenas das receitas.</h2></Copy>
            </div>
            <Copy><p className="dolce-featured-header-copy">Na Dolce.me, os picolés passaram por testes, ajustes e pelo desafio de conquistar os clientes de uma confeitaria de verdade.</p></Copy>
          </div>

          <InfiniteImageCarousel />

          <Copy>
            <div className="dolce-featured-highlight">
              <p className="dolce-featured-highlight-label">Resultado real da Dolce.me</p>
              <p className="dolce-featured-highlight-number">+1.000</p>
              <p className="dolce-featured-highlight-title">picolés vendidos</p>
              <p className="dolce-featured-highlight-copy">em menos de um mês.</p>
            </div>
          </Copy>
          <div className="dolce-featured-story">
            <Copy><p>Esse foi o resultado que alcançamos após levar nossos picolés para o cardápio da confeitaria.</p></Copy>
            <Copy><p>E é parte dessa experiência que queremos compartilhar com você.</p></Copy>
            <Copy><p>O Descomplicando Picolés reúne o conhecimento que desenvolvemos sobre ingredientes, técnicas e processos de produção para que você também possa aprender a criar picolés com mais segurança e autonomia.</p></Copy>
            <Copy><p>Porque saber reproduzir uma receita é importante. Mas entender o que você está fazendo abre possibilidades para criar muito mais.</p></Copy>
            <a className="hero-premium-cta dolce-featured-cta" href="https://pay.kiwify.com.br/MzpjRKm">
              <span>Quero aprender agora</span>
              <span className="hero-premium-cta-icon" aria-hidden="true"><img src="/dolce/popsicle-icon-pink-hq.png" alt="" /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
