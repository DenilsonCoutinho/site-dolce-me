"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Copy from "@/components/Copy/Copy";
import "./CourseDisciplines.css";

gsap.registerPlugin(ScrollTrigger);

const lessons = [
  { title: "Bases cremosas", description: "Aprenda a preparar diferentes bases e entenda como os ingredientes, os açúcares e a estabilização influenciam a cremosidade e a textura dos picolés.", image: "/dolce/pudim.avif" },
  { title: "Geleias, caramelos e recheios crocantes", description: "Descubra como preparar recheios com diferentes texturas e consistências, desenvolvidos para combinar com as bases e valorizar cada sabor.", image: "/dolce/morango.avif" },
  { title: "Criação e combinação de sabores", description: "Aprenda a combinar bases, recheios e coberturas para criar novos sabores, sem ficar limitada às receitas apresentadas no curso.", image: "/dolce/brownie.avif" },
  { title: "Montagem e recheio", description: "Conheça as técnicas de montagem, recheios e fechamento dos picolés para conseguir um resultado bonito e bem estruturado.", image: "/dolce/montagem.avif" },
  { title: "Chocolate e acabamentos", description: "Aprenda temperagem, banho de chocolate e diferentes técnicas de finalização, incluindo coberturas crocantes, decorações e acabamentos especiais.", image: "/dolce/picoles-chocolate.png" },
  { title: "Congelamento e conservação", description: "Entenda os cuidados com congelamento, desenforme, armazenamento e validade para preservar a qualidade dos seus produtos.", image: "/dolce/matheus.avif" },
];

function LessonCard({ lesson, index, hidden = false }) {
  return (
    <article className="course-discipline-card" aria-hidden={hidden || undefined}>
      <p className="course-mono">0{index + 1}</p>
      <img src={lesson.image} loading="lazy" decoding="async" alt={hidden ? "" : lesson.title} draggable="false" />
      <p className="course-discipline-card-title">{lesson.title}</p>
      <p className="course-discipline-card-description">{lesson.description}</p>
    </article>
  );
}

function LessonSet({ hidden = false, setRef }) {
  return (
    <div className="course-discipline-mobile-set" aria-hidden={hidden || undefined} ref={setRef}>
      {lessons.map((lesson, index) => <LessonCard lesson={lesson} index={index} hidden={hidden} key={lesson.title} />)}
    </div>
  );
}

export function MobileLessonsCarousel({ ariaLabel = "Módulos do curso" }) {
  const trackRef = useRef(null);
  const firstSetRef = useRef(null);
  const positionRef = useRef(0);
  const pointerRef = useRef(null);
  const lastFrameRef = useRef(null);
  const speedRef = useRef(-24);
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
        speedRef.current += (-24 - speedRef.current) * Math.min(1, elapsed / 750);
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
    <div className="course-disciplines-mobile-carousel" aria-label={ariaLabel}>
      <div
        className={`course-discipline-mobile-track${isDragging ? " is-dragging" : ""}`}
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        <LessonSet setRef={firstSetRef} />
        <LessonSet hidden />
      </div>
    </div>
  );
}

export default function CourseDisciplines() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth < 1001) return;
    const cards = gsap.utils.toArray(".course-disciplines-grid--desktop .course-discipline-card", sectionRef.current);
    if (!cards.length) return;
    gsap.set(cards, { y: 300, opacity: 0 });
    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: { trigger: ".course-disciplines-grid", start: "top 85%", once: true },
    });
  }, { scope: sectionRef });

  return (
    <section className="course-disciplines" id="curso" ref={sectionRef}>
      <div className="container">
        <div className="course-disciplines-wrapper">
          <div className="course-disciplines-intro">
            <div className="course-disciplines-intro-copy">
              <Copy><p className="course-mobile-eyebrow">O que você vai aprender</p></Copy>
              <Copy><h2>Da base ao acabamento:</h2></Copy>
              <Copy><p className="course-intro-subtitle">Aprenda o que faz um picolé dar certo.</p></Copy>
            </div>
            <div className="course-floating-pops" aria-hidden="true">
              <img className="course-floating-pop course-floating-pop--vanilla" src="/dolce/floating-vanilla-pop.avif" loading="lazy" decoding="async" alt="" />
              <img className="course-floating-pop course-floating-pop--chocolate" src="/dolce/floating-chocolate-pop.avif" loading="lazy" decoding="async" alt="" />
            </div>
            <span className="course-scroll-cue" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L18 13M12 19L6 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <div className="course-disciplines-content">
            <aside className="course-disciplines-left">
              <Copy><h3>O que você vai aprender</h3></Copy>
              <Copy><p className="course-disciplines-description">No Descomplicando Picolés, você vai entender não apenas como preparar cada receita, mas também o papel dos ingredientes e das técnicas que fazem diferença no resultado final.</p></Copy>
              <img className="course-disciplines-feature-image course-disciplines-feature-logo" src="/dolce/curso-logo-trimmed.png" alt="Descomplicando Picolés" />
            </aside>

            <div className="course-disciplines-right">
              <div className="course-disciplines-grid course-disciplines-grid--desktop">
                {lessons.map((lesson, index) => (
                  <LessonCard lesson={lesson} index={index} key={lesson.title} />
                ))}
              </div>
              <MobileLessonsCarousel />
            </div>
          </div>
        </div>
      </div>
      <img className="course-section-divider" src="/dolce/rounded-curve.svg?v=4" alt="" aria-hidden="true" />
    </section>
  );
}
