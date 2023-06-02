import { Fragment } from "react";
import fig from './fig1.svg';
import './Home.css';

export default function Home() {
  return (
    <section className="Home">
      <div>
        <h1>Boas vindas a Lacrei Saúde</h1>
        <h2>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</h2>
        <a href="/">Pessoa Usuária</a>
        <a href="/">Profissional</a>
      </div>
      <img src={fig} alt="Desenho de uma pessoa vestida com trages que remetem a um médico" />
    </section>
  )
}
