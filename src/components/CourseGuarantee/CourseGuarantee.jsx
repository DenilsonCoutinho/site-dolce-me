import { FiArrowDownRight } from "react-icons/fi";
import Copy from "@/components/Copy/Copy";
import "./CourseGuarantee.css";

const questions = [
  {
    question: "Preciso trabalhar com confeitaria para fazer o curso?",
    answer: "Não. O curso foi desenvolvido tanto para quem deseja começar do zero quanto para quem já trabalha com confeitaria e quer acrescentar novos produtos ao cardápio.",
  },
  {
    question: "Vou aprender apenas as receitas apresentadas?",
    answer: "Não. Além das receitas, você aprenderá fundamentos e técnicas de produção que ajudam a compreender os ingredientes e a desenvolver suas próprias combinações de sabores.",
  },
  {
    question: "Quais sabores são ensinados?",
    answer: "Entre os sabores e preparações apresentados estão Ninho com Nutella, Chocolate com Brownie, Pistache com Framboesa, Coco Crocante, Morango Cravejado, Pudim e outras combinações. O curso também ensina técnicas que você poderá aplicar em suas próprias criações.",
  },
  {
    question: "Preciso de equipamentos profissionais?",
    answer: "O curso apresenta os equipamentos, formas e utensílios utilizados na produção, para que você conheça os materiais necessários e possa planejar sua estrutura.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "Você terá acesso ao conteúdo por um ano, através da plataforma Kiwify, podendo assistir e revisar as aulas durante esse período.",
  },
  {
    question: "E se eu tiver dúvidas durante o curso?",
    answer: "Você contará com suporte pelo WhatsApp para dúvidas relacionadas ao conteúdo, com prazo de resposta de até 24 horas.",
  },
];

export default function CourseGuarantee() {
  return (
    <section className="course-guarantee" id="duvidas">
      <div className="course-guarantee-inner">
        <div className="course-guarantee-panel">
          <div className="course-guarantee-seal-wrap">
            <img className="course-guarantee-seal" src="/dolce/guarantee-ribbon-badge.avif" loading="lazy" decoding="async" alt="Selo de garantia" />
            <span className="course-guarantee-seal-days"><strong>7</strong> dias</span>
          </div>
          <div className="course-guarantee-intro">
            <Copy><p className="course-guarantee-label">Garantia e dúvidas frequentes</p></Copy>
            <Copy><h2>Você tem 7 dias para conhecer o curso.</h2></Copy>
            <Copy><p>Queremos que você tenha tranquilidade na sua decisão.</p></Copy>
            <Copy><p>Por isso, sua inscrição conta com uma garantia de 7 dias. Se perceber que o Descomplicando Picolés não é o que procurava, poderá solicitar o reembolso dentro desse prazo, conforme as condições da plataforma.</p></Copy>
          </div>
        </div>

        <div className="course-guarantee-faq">
          <p className="course-guarantee-faq-label">Antes de começar</p>
          {questions.map(({ question, answer }, index) => (
            <details className="course-guarantee-item" key={question} open={index === 0}>
              <summary>
                <span>{question}</span>
                <FiArrowDownRight aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
