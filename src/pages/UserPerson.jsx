import fig from './fig2.svg';
import './Pages.css';

export default function User() {
  return (
    <section className="pages">
      <div>
        <h1>Pessoa Usuária</h1>
        <p>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</p>
      </div>
      <img src={fig} alt="Desenho de pessoas utilizando o celuar" />
    </section>
  );
}