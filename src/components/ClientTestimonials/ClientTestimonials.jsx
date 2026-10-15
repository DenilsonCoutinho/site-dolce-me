"use client";

import Copy from "@/components/Copy/Copy";
import { MobileLessonsCarousel } from "@/components/CourseDisciplines/CourseDisciplines";
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

function TestimonialCard({ testimonial, className = "" }) {
  return (
    <article className={`client-testimonial ${className}`.trim()}>
      <span className="client-testimonial-mark" aria-hidden="true">“</span>
      <p>{testimonial}</p>
      <span className="client-testimonial-source">Cliente Dolce.me <span aria-hidden="true">♥</span></span>
    </article>
  );
}

function CourseTestimonialCard({ testimonial, hidden = false }) {
  return (
    <article className="course-discipline-card client-testimonial-course-card" aria-hidden={hidden || undefined}>
      <p className="course-mono">Feedback real</p>
      <span className="client-testimonial-mark" aria-hidden="true">“</span>
      <p className="client-testimonial-course-copy">{testimonial}</p>
      <span className="client-testimonial-source">Cliente Dolce.me <span aria-hidden="true">♥</span></span>
    </article>
  );
}

function CourseTestimonialSet({ hidden = false, setRef }) {
  return (
    <div className="course-discipline-mobile-set" aria-hidden={hidden || undefined} ref={setRef}>
      {testimonials.map((testimonial) => <CourseTestimonialCard testimonial={testimonial} hidden={hidden} key={testimonial} />)}
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
          <div className="client-testimonials-course-carousel" aria-label="Carrossel do curso para comparação">
            <MobileLessonsCarousel
              ariaLabel="Depoimentos de clientes"
              renderSet={({ hidden, setRef, key }) => <CourseTestimonialSet hidden={hidden} setRef={setRef} key={key} />}
            />
          </div>
          <div className="client-testimonials-course-carousel client-testimonials-course-carousel--light" aria-label="Depoimentos de clientes">
            <MobileLessonsCarousel
              ariaLabel="Depoimentos de clientes"
              direction={1}
              renderSet={({ hidden, setRef, key }) => <CourseTestimonialSet hidden={hidden} setRef={setRef} key={key} />}
            />
          </div>
        </div>
      </div>
      <img className="client-testimonials-divider" src="/dolce/rounded-curve-olive.svg" alt="" aria-hidden="true" />
    </section>
  );
}
