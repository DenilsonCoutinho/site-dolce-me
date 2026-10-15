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
          {testimonialRows.map((row, rowIndex) => (
            <div className={`client-testimonials-marquee client-testimonials-marquee--${rowIndex + 1}`} key={`row-${rowIndex}`}>
              <div className="client-testimonials-marquee-track">
                {[0, 1, 2].map((copyIndex) => (
                  <div className="client-testimonials-marquee-group" key={copyIndex} aria-hidden={copyIndex === 1}>
                    {row.map((testimonial, index) => (
                      <article className="client-testimonials-marquee-card" key={`${copyIndex}-${testimonial}`}>
                        <span aria-hidden="true">“</span>
                        <p>{testimonial}</p>
                        <small>Cliente Dolce.me ♥</small>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className="client-testimonials-divider" src="/dolce/rounded-curve-olive.svg" alt="" aria-hidden="true" />
    </section>
  );
}
