import Copy from "@/components/Copy/Copy";
import { FiBookOpen, FiClock, FiDollarSign, FiMessageCircle, FiPlayCircle, FiUsers } from "react-icons/fi";
import "./CourseIncludes.css";

const benefits = [
  {
    icon: FiPlayCircle,
    title: "Videoaulas passo a passo",
    text: "Técnicas de produção das bases, preparo dos recheios, montagem, chocolate, finalização e conservação.",
  },
  {
    icon: FiBookOpen,
    title: "Apostila digital completa",
    text: "Receitas, explicações técnicas, ingredientes e orientações para acompanhar seus estudos e produções.",
  },
  {
    icon: FiDollarSign,
    title: "Planilha de precificação",
    text: "Organize os custos das receitas e tenha apoio para definir os seus preços de venda.",
  },
  {
    icon: FiUsers,
    title: "Grupo exclusivo de alunas",
    text: "Um espaço para compartilhar experiências e acompanhar quem também está aprendendo.",
  },
  {
    icon: FiMessageCircle,
    title: "Suporte pelo WhatsApp",
    text: "Canal para tirar dúvidas sobre o conteúdo, com prazo de resposta de até 24 horas.",
  },
  {
    icon: FiClock,
    title: "Acesso durante 1 ano",
    text: "Estude no seu ritmo e reveja as aulas sempre que precisar durante o período de acesso.",
  },
];

export default function CourseIncludes() {
  return (
    <section className="course-includes" id="incluso">
      <div className="course-includes-inner">
        <div className="course-includes-heading">
          <Copy><p className="course-includes-label">O que está incluso</p></Copy>
          <Copy><h2>Tudo o que você precisa para começar a aprender, em um só lugar.</h2></Copy>
          <Copy><p className="course-includes-intro">Ao se inscrever no Descomplicando Picolés, você recebe:</p></Copy>
        </div>

        <div className="course-includes-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
            <article className="course-includes-card" key={benefit.title}>
              <Icon className="course-includes-icon" aria-hidden="true" />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
            );
          })}
        </div>

        <div className="course-includes-bonus">
          <div className="course-includes-bonus-gallery" aria-label="Bolos gelados preparados pela Dolce.me">
            <img className="course-includes-bonus-main" src="/dolce/bonus-bolos-gelados-duo.jpg" alt="Bolos gelados com coberturas cremosas" />
            <img className="course-includes-bonus-pistachio" src="/dolce/bonus-bolos-gelados-pistache.jpg" alt="Bolo gelado de pistache" />
            <img className="course-includes-bonus-chocolate" src="/dolce/bonus-bolos-gelados-chocolate.jpg" alt="Bolo gelado de chocolate" />
            <span className="course-includes-bonus-tag">Bônus especial</span>
          </div>

          <div className="course-includes-bonus-copy">
            <Copy><p className="course-includes-label">Bônus especial</p></Copy>
            <Copy><h2>E-book Bolos Gelados</h2></Copy>
            <Copy><p>E tem mais! Ao se inscrever no Descomplicando Picolés, você também recebe o nosso e-book de Bolos Gelados, com receitas para diversificar sua produção e ampliar as opções do seu cardápio.</p></Copy>
            <Copy><p>Um conteúdo extra para você explorar ainda mais possibilidades na confeitaria.</p></Copy>
          </div>
        </div>
      </div>
    </section>
  );
}
