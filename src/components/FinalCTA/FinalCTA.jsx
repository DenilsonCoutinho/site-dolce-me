import Copy from "@/components/Copy/Copy";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="comecar-agora">
      <div className="final-cta-orbit final-cta-orbit--one" aria-hidden="true" />
      <div className="final-cta-orbit final-cta-orbit--two" aria-hidden="true" />
      <div className="final-cta-inner">
        <div className="final-cta-brand">
          <img src="/dolce/curso-logo-trimmed.png" alt="Descomplicando Picolés" />
        </div>
        <div className="final-cta-copy">
          <Copy><p className="final-cta-label">Descomplicando Picolés</p></Copy>
          <Copy><h2>Agora é a sua vez de criar.</h2></Copy>
          <Copy><p>Comece pelas receitas. Aprenda as técnicas. Crie os seus próprios sabores.</p></Copy>
          <a className="hero-premium-cta final-cta-button" href="https://pay.kiwify.com.br/MzpjRKm" target="_blank" rel="noreferrer">
            <span>Quero começar agora</span>
            <span className="hero-premium-cta-icon" aria-hidden="true"><img src="/dolce/popsicle-icon-pink-hq.png" alt="" /></span>
          </a>
          <p className="final-cta-note">Acesso por 1 ano · Garantia de 7 dias</p>
        </div>
      </div>
    </section>
  );
}
