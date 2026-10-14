import Copy from "@/components/Copy/Copy";
import "./CourseInstructor.css";

export default function CourseInstructor() {
  return (
    <section className="course-instructor">
      <div className="course-instructor-wrapper">
        <figure className="course-instructor-portrait">
          <div className="course-instructor-seal" aria-hidden="true">
            <svg viewBox="0 0 200 200" role="presentation">
              <defs>
                <path id="course-instructor-seal-path" d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" />
              </defs>
              <text>
                <textPath href="#course-instructor-seal-path" startOffset="0%" textLength="515" lengthAdjust="spacing">
                  <tspan>DESCOMPLICANDO </tspan><tspan className="course-instructor-seal-pink">PICOLÉS</tspan><tspan> · DESCOMPLICANDO </tspan><tspan className="course-instructor-seal-pink">PICOLÉS</tspan><tspan> ·</tspan>
                </textPath>
              </text>
            </svg>
            <span><img src="/dolce/popsicle-icon-pink-hq.png" alt="" /></span>
          </div>
          <img src="/dolce/mentor-matheus-portrait.png" alt="Matheus Engel, chef confeiteiro e sócio da Dolce.me Brigadeiria" />
          <figcaption><strong>Matheus Engel</strong><span>Chef confeiteiro e sócio da Dolce.me Brigadeiria</span></figcaption>
        </figure>

        <div className="course-instructor-copy">
          <Copy><p className="course-instructor-label">Quem vai ensinar você?</p></Copy>
          <Copy><h2>Conheça o chef por trás do Descomplicando Picolés.</h2></Copy>
          <Copy><p>Com sete anos de experiência na confeitaria, Matheus participa do desenvolvimento dos produtos e das técnicas utilizadas na produção da Dolce.me.</p></Copy>
          <Copy><p>Ao longo dessa trajetória, transformou sua experiência prática em conteúdos que já ajudaram milhares de alunas a aprender diferentes preparos da confeitaria.</p></Copy>
          <Copy><p>No Descomplicando Picolés, ele compartilha seus conhecimentos de maneira didática, explicando cada etapa e os fundamentos necessários para que você entenda o processo, e não apenas siga instruções.</p></Copy>
          <Copy><p className="course-instructor-closing">Para que você aprenda o porquê de cada técnica e não somente como executá-la.</p></Copy>
          <Copy>
            <a className="hero-premium-cta course-instructor-cta" href="https://pay.kiwify.com.br/MzpjRKm" target="_blank" rel="noreferrer">
              <span>Quero aprender agora</span>
              <span className="hero-premium-cta-icon" aria-hidden="true"><img src="/dolce/popsicle-icon-pink-hq.png" alt="" /></span>
            </a>
          </Copy>
        </div>
      </div>
    </section>
  );
}
