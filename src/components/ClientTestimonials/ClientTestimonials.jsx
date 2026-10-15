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

function TestimonialCard({ testimonial, className = "", hidden = false }) {
  return (
    <article className={`client-testimonial ${className}`.trim()} aria-hidden={hidden || undefined}>
      <span className="client-testimonial-mark" aria-hidden="true">“</span>
      <p>{testimonial}</p>
      <span className="client-testimonial-source">Cliente Dolce.me <span aria-hidden="true">♥</span></span>
    </article>
  );
}

function TestimonialSet({ row, featured = false, hidden = false, setRef }) {
  return (
    <div className="client-testimonials-marquee-group" aria-hidden={hidden || undefined} ref={setRef}>
      {row.map((testimonial) => (
        <TestimonialCard
          testimonial={testimonial}
          className={featured ? "client-testimonial--carousel" : "client-testimonials-marquee-card"}
          hidden={hidden}
          key={testimonial}
        />
      ))}
    </div>
  );
}

function InfiniteTestimonialsCarousel({ row, direction = "left" }) {
  const trackRef = useRef(null);
  const firstSetRef = useRef(null);
  const positionRef = useRef(0);
  const pointerRef = useRef(null);
  const lastFrameRef = useRef(null);
  const targetSpeed = direction === "right" ? 24 : -24;
  const speedRef = useRef(targetSpeed);
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
        speedRef.current += (targetSpeed - speedRef.current) * Math.min(1, elapsed / 750);
        positionRef.current += (speedRef.current * elapsed) / 1000;
        paintTrack();
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [targetSpeed]);

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
    <div className={`client-testimonials-infinite-carousel client-testimonials-infinite-carousel--${direction}`} aria-label="Depoimentos de clientes">
      <div
        className={`client-testimonials-infinite-track${isDragging ? " is-dragging" : ""}`}
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        <TestimonialSet row={row} featured setRef={firstSetRef} />
        <TestimonialSet row={row} featured hidden />
      </div>
    </div>
  );
}

export default function ClientTestimonials() {
  return (
    <section className="client-testimonials" id="depoimentos">
      <div className="client-testimonials-inner">
        <div className="client-testimonials-heading">
          <Copy><h2>Quem prova, conta!</h2></Copy>
          <Copy><p>Nossos picolés já conquistaram muitos clientes aqui na Dolce.me. Confira o que eles estão dizendo.</p></Copy>
        </div>

        <div className="client-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} className={`client-testimonial--${index + 1}`} key={testimonial} />
          ))}
        </div>

        <div className="client-testimonials-lessons-carousel" aria-label="Depoimentos de clientes da Dolce.me">
          <InfiniteTestimonialsCarousel row={testimonialRows[0]} />
          <InfiniteTestimonialsCarousel row={testimonialRows[1]} direction="right" />
        </div>
      </div>
      <img className="client-testimonials-divider" src="/dolce/rounded-curve-olive.svg" alt="" aria-hidden="true" />
    </section>
  );
}
