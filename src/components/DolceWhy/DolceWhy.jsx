import Copy from "@/components/Copy/Copy";
import "./DolceWhy.css";

export default function DolceWhy() {
  return (
    <section className="dolce-why">
      <div className="dolce-why-wrapper">
        <div className="dolce-why-heading">
          <Copy><p className="dolce-why-label">Por que aprender com a Dolce.me?</p></Copy>
          <Copy><h2>Um curso que nasceu da prática, não apenas das receitas.</h2></Copy>
        </div>

        <div className="dolce-why-copy">
          <Copy><p>Na Dolce.me, os picolés passaram por testes, ajustes e pelo desafio de conquistar os clientes de uma confeitaria de verdade.</p></Copy>
          <div className="dolce-why-result">
            <p>Mais de</p>
            <strong>1.000</strong>
            <span>picolés vendidos em menos de um mês.</span>
          </div>
          <Copy><p>Esse foi o resultado que alcançamos após levar nossos picolés para o cardápio da confeitaria.</p></Copy>
          <Copy><p>E é parte dessa experiência que queremos compartilhar com você.</p></Copy>
          <Copy><p>O Descomplicando Picolés reúne o conhecimento que desenvolvemos sobre ingredientes, técnicas e processos de produção para que você também possa aprender a criar picolés com mais segurança e autonomia.</p></Copy>
          <Copy><p className="dolce-why-closing">Porque saber reproduzir uma receita é importante. Mas entender o que você está fazendo abre possibilidades para criar muito mais.</p></Copy>
        </div>
      </div>
    </section>
  );
}
