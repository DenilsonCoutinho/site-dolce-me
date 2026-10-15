import { FiCalendar, FiCheck, FiCreditCard, FiShield } from "react-icons/fi";
import Copy from "@/components/Copy/Copy";
import "./CourseInvestment.css";

const included = [
  "Aulas completas e materiais de apoio",
  "Bônus E-book Bolos Gelados",
  "Suporte pelo WhatsApp",
];

export default function CourseInvestment() {
  return (
    <section className="course-investment" id="investimento">
      <div className="course-investment-inner">
        <div className="course-investment-intro">
          <Copy><p className="course-investment-label">Investimento</p></Copy>
          <Copy><h2>Agora é hora de colocar sabor nas suas ideias.</h2></Copy>
          <Copy><p>Aprenda a preparar picolés cremosos, recheados e cobertos com chocolate, domine novas técnicas e desenvolva combinações com a sua identidade.</p></Copy>
          <Copy><p>Tenha acesso às aulas, aos materiais de apoio e ao suporte para acompanhar seu aprendizado.</p></Copy>
        </div>

        <aside className="course-investment-card" aria-label="Condições de acesso ao curso">
          <div className="course-investment-card-top">
            <span>Investimento</span>
            <span>Descomplicando Picolés</span>
          </div>

          <div className="course-investment-plan">
            <div className="course-investment-plan-heading">
              <div>
                <p className="course-investment-card-eyebrow">Curso completo</p>
                <strong>Um investimento para aprender no seu ritmo.</strong>
              </div>
            </div>
            <div className="course-investment-price" aria-label="Investimento de 197 reais">
              <span>R$</span><strong>197</strong><sup>,00</sup>
            </div>
            <p className="course-investment-installments">Parcelamento disponível em até <strong>12x</strong>, conforme as condições apresentadas no checkout.</p>
          </div>

          <ul className="course-investment-list">
            {included.map((item) => <li key={item}><FiCheck aria-hidden="true" />{item}</li>)}
          </ul>

          <a className="hero-premium-cta course-investment-cta" href="https://pay.kiwify.com.br/MzpjRKm" target="_blank" rel="noreferrer">
            <span>Quero começar agora</span>
            <span className="hero-premium-cta-icon" aria-hidden="true"><img src="/dolce/popsicle-icon-pink-hq.png" alt="" /></span>
          </a>

          <div className="course-investment-trust">
            <span><FiCalendar aria-hidden="true" />Acesso por 1 ano</span>
            <span><FiCreditCard aria-hidden="true" />Plataforma Kiwify</span>
            <span><FiShield aria-hidden="true" />Garantia de 7 dias</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
