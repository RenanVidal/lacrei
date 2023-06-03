import fig from './fig1.svg';
import './Pages.css';

export default function Home() {
  return (
    <section className="pages">
      <div>
        <h1>Boas vindas a Lacrei Saúde</h1>
        <h2>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</h2>
        <a href="/user-person">Pessoa Usuária</a>
        <a href="/professional">Profissional</a>
      </div>
      <img src={fig} alt="Desenho de uma pessoa vestida com trages que remetem a um médico" />
    </section>
  );
}
