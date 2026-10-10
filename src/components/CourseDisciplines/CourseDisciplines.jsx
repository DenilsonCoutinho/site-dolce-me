"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Copy from "@/components/Copy/Copy";
import "./CourseDisciplines.css";

gsap.registerPlugin(ScrollTrigger);

const lessons = [
  { title: "Bases cremosas", image: "/dolce/pudim.png" },
  { title: "Recheios irresistíveis", image: "/dolce/morango.png" },
  { title: "Combinações de sabores", image: "/dolce/brownie.png" },
  { title: "Montagem e finalização", image: "/dolce/montagem.png" },
  { title: "Custo e precificação", image: "/dolce/custo-precificacao.png" },
  { title: "Venda e delivery", image: "/dolce/matheus.png" },
];

export default function CourseDisciplines() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".course-discipline-card", sectionRef.current);
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
            <Copy><p className="course-mono">[ DESCOMPLICANDO PICOLÉS ]</p></Copy>
            <Copy><h2>Aprenda a fazer picolés que todo mundo quer provar.</h2></Copy>
            <div className="course-floating-pops" aria-hidden="true">
              <img className="course-floating-pop course-floating-pop--vanilla" src="/dolce/floating-vanilla-pop.png" alt="" />
              <img className="course-floating-pop course-floating-pop--chocolate" src="/dolce/floating-chocolate-pop.png" alt="" />
            </div>
          </div>

          <div className="course-disciplines-content">
            <aside className="course-disciplines-left">
              <Copy><h3>Do primeiro sabor à venda do seu produto.</h3></Copy>
              <div className="course-disciplines-copy">
                <img src="/dolce/brownie.png" alt="Picolé Dolce.me finalizado" />
                <p>Um curso prático para criar picolés cremosos, recheados e prontos para encantar — mesmo que você esteja começando agora.</p>
              </div>
            </aside>

            <div className="course-disciplines-right">
              <Copy><h3>O que você vai aprender</h3></Copy>
              <div className="course-disciplines-grid">
                {lessons.map((lesson, index) => (
                  <article className="course-discipline-card" key={lesson.title}>
                    <p className="course-mono">0{index + 1}</p>
                    <img src={lesson.image} alt={lesson.title} />
                    <p>{lesson.title}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
