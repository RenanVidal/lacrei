import fig from './fig3.svg';
import './Pages.css';

export default function Professional() {
  return (
    <section className="pages">
      <div>
        <h1>Profissional</h1>
        <p>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</p>
      </div>
      <img src={fig} alt="Desenho de profissionais da aréa da saúde. Médicos, enfermeiros, ente outros."/>
    </section>
  );
}