"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Copy from "@/components/Copy/Copy";
import "./DolceFeaturedCards.css";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { eyebrow: "Cremosos", title: "Picolés que abraçam", image: "/dolce/pudim.png" },
  { eyebrow: "Recheados", title: "Camadas de sabor", image: "/dolce/morango.png" },
  { eyebrow: "Para vender", title: "Feitos para encantar", image: "/dolce/montagem.png" },
  { eyebrow: "Da Dolce.me", title: "Seu novo começo", image: "/dolce/hero.png" },
];

export default function DolceFeaturedCards() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const cardEls = cardsRef.current?.querySelectorAll(".dolce-featured-card");
    if (!section || !cardEls?.length) return;

    let trigger;
    const setup = () => {
      trigger?.kill();
      cardEls.forEach((card) => gsap.set(card, { clearProps: "all" }));
      if (window.innerWidth < 1000) return;

      trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight * cardEls.length}`,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress * cardEls.length;
          cardEls.forEach((card, index) => {
            const current = gsap.utils.clamp(0, 1, progress - index);
            const next = gsap.utils.clamp(0, 1, progress - (index + 1));
            gsap.set(card, {
              y: gsap.utils.interpolate("200%", "-50%", current),
              scale: gsap.utils.interpolate(1, 0.87, next),
              "--card-overlay": gsap.utils.interpolate(0, 0.5, next),
            });
          });
        },
      });
    };

    setup();
    const onResize = () => setup();
    window.addEventListener("resize", onResize);
    return () => { trigger?.kill(); window.removeEventListener("resize", onResize); };
  }, { scope: sectionRef });

  return (
    <section className="dolce-featured-cards" ref={sectionRef}>
      <div className="container">
        <div className="dolce-featured-cards-wrapper">
          <div className="dolce-featured-cards-header">
            <Copy><p className="sm dolce-featured-label">[ DESCOMPLICANDO PICOLÉS ]</p></Copy>
            <Copy>
              <h2>Receitas que dão vontade de fazer, vender e repetir.</h2>
            </Copy>
            <a className="hero-premium-cta dolce-featured-cta" href="https://pay.kiwify.com.br/MzpjRKm">
              <span>Quero aprender</span>
              <span className="hero-premium-cta-icon" aria-hidden="true"><img src="/dolce/popsicle-icon-pink-hq.png" alt="" /></span>
            </a>
          </div>

          <div className="dolce-featured-cards-stack" ref={cardsRef}>
            {cards.map((card) => (
              <article className="dolce-featured-card" key={card.title}>
                <img src={card.image} alt={card.title} />
                <div className="dolce-featured-card-content">
                  <p>{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
