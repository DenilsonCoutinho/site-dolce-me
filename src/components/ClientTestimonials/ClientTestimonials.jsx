"use client";

import { useEffect, useRef, useState } from "react";
import Copy from "@/components/Copy/Copy";
import "./ClientTestimonials.css";

const testimonials = [
  "Esse sorvete tem um defeito: ele acaba! Que coisa boaaa!",
  "Meu Deus, que delícia esses picolés. O melhor do mundoooo! Jesus, que delícia. Vou me acabar de comer.",
  "Só pra dizer que ontem provei um dos picolés de vocês e é simplesmente divino.",
  "Divinoooo. Eu ameiiii. Queria todos os dias.",
  "Preciso falar que o picolé de morango cravejado tá impecável.",
  "Eu provei o de Brûlée e o de coco. Surreal de bom. Experimentei de outros lugares, mas o de vocês era muito melhor!",
  "Gente, arrasaram! Muito, muito bom. Provei os dois hoje!",
  "Que delícia esse picolé. O de ninho com Nutella então, é divino, muito cremoso e saboroso.",
  "Ainda tem picolé? Meu Deus, sensacional.",
  "Inclusive ontem provei os outros dois, perfeitos. Meu preferido foi o de Brûlée.",
  "O picolé de morango cravejado está divino! Muito, muito bom! Parabéns!",
  "Hoje experimentei dois picolés de coco e de Nutella. Melhor picolé da vida!",
  "O de chocolate com brownie ficou divino também!",
  "Muito bom! Adorei!",
];

const testimonialRows = [
  testimonials.filter((_, index) => index % 2 === 0),
  testimonials.filter((_, index) => index % 2 !== 0),
];

function TestimonialSet({ row, hidden = false, setRef }) {
  return (
    <div className="client-testimonials-marquee-group" ref={setRef} aria-hidden={hidden || undefined}>
      {row.map((testimonial) => (
        <article className="client-testimonials-marquee-card" key={testimonial}>
          <span aria-hidden="true">“</span>
          <p>{testimonial}</p>
          <small>Cliente Dolce.me ♥</small>
        </article>
      ))}
    </div>
  );
}

function MobileMarquee({ row, rowIndex }) {
  const trackRef = useRef(null);
  const firstSetRef = useRef(null);
  const positionRef = useRef(0);
  const hasMeasuredRef = useRef(false);
  const pointerRef = useRef(null);
  const lastFrameRef = useRef(null);
  const speedRef = useRef(rowIndex === 0 ? -14 : 14);
  const [isDragging, setIsDragging] = useState(false);
  const idleSpeed = rowIndex === 0 ? -14 : 14;

  const paintTrack = () => {
    const setWidth = firstSetRef.current?.offsetWidth;
    if (!setWidth) return;
    if (!hasMeasuredRef.current) {
      positionRef.current = -setWidth;
      hasMeasuredRef.current = true;
    }
    while (positionRef.current <= -setWidth * 2) positionRef.current += setWidth;
    while (positionRef.current > -setWidth) positionRef.current -= setWidth;
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
  };

  useEffect(() => {
    let frame;
    const move = (time) => {
      const previous = lastFrameRef.current ?? time;
      lastFrameRef.current = time;
      if (!pointerRef.current) {
        const elapsed = time - previous;
        speedRef.current += (idleSpeed - speedRef.current) * Math.min(1, elapsed / 750);
        positionRef.current += (speedRef.current * elapsed) / 1000;
        paintTrack();
      }
      frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, [idleSpeed]);

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
    <div
      className={`client-testimonials-marquee client-testimonials-marquee--${rowIndex + 1}`}
    >
      <div
        className={`client-testimonials-marquee-track${isDragging ? " is-dragging" : ""}`}
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        <TestimonialSet row={row} hidden />
        <TestimonialSet row={row} setRef={firstSetRef} />
        <TestimonialSet row={row} hidden />
      </div>
    </div>
  );
}

export default function ClientTestimonials() {
  return (
    <section className="client-testimonials" id="depoimentos">
      <div className="client-testimonials-inner">
        <div className="client-testimonials-heading">
          <Copy><p className="client-testimonials-label">Provas sociais</p></Copy>
          <Copy><h2>Quem prova, conta!</h2></Copy>
          <Copy><p>Nossos picolés já conquistaram muitos clientes aqui na Dolce.me. Confira o que eles estão dizendo.</p></Copy>
        </div>

        <div className="client-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article className={`client-testimonial client-testimonial--${index + 1}`} key={testimonial}>
              <span className="client-testimonial-mark" aria-hidden="true">“</span>
              <p>{testimonial}</p>
              <span className="client-testimonial-source">Cliente Dolce.me <span aria-hidden="true">♥</span></span>
            </article>
          ))}
        </div>

        <div className="client-testimonials-mobile-marquees" aria-label="Depoimentos de clientes da Dolce.me">
          {testimonialRows.map((row, rowIndex) => <MobileMarquee row={row} rowIndex={rowIndex} key={`row-${rowIndex}`} />)}
        </div>
      </div>
      <img className="client-testimonials-divider" src="/dolce/rounded-curve-olive.svg" alt="" aria-hidden="true" />
    </section>
  );
}
