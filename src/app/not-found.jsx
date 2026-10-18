import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__grain" aria-hidden="true" />
      <div className="not-found__seal" aria-hidden="true">
        <svg viewBox="0 0 200 200" role="presentation">
          <defs>
            <path id="not-found-seal-path" d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" />
          </defs>
          <text>
            <textPath href="#not-found-seal-path" startOffset="0%" textLength="515" lengthAdjust="spacing">
              DOCE.ME · VOLTE PARA O CURSO · DOCE.ME · VOLTE PARA O CURSO ·
            </textPath>
          </text>
        </svg>
        <span><img src="/dolce/popsicle-icon-pink-hq.png" alt="" /></span>
      </div>

      <div className="not-found__content container">
        <Link className="not-found__brand" href="/descomplicandopicoles" aria-label="Voltar para Descomplicando Picolés">
          <img src="/dolce/curso-logo-trimmed.png" alt="Descomplicando Picolés" />
        </Link>

        <section className="not-found__message" aria-labelledby="not-found-title">
          <p className="not-found__eyebrow">Erro 404 · página não encontrada</p>
          <p className="not-found__number" aria-hidden="true">404</p>
          <h1 id="not-found-title">Parece que esse picolé derreteu no caminho.</h1>
          <p className="not-found__copy">A página que você procurou não está por aqui, mas o curso continua prontinho para você.</p>
          <Link className="not-found__cta" href="/descomplicandopicoles">
            <span>Voltar para o curso</span>
            <span className="not-found__cta-icon" aria-hidden="true">↗</span>
          </Link>
        </section>

        <p className="not-found__footer">© Dolce.me Brigadeiria</p>
      </div>
    </main>
  );
}
