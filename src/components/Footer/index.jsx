import logoFace from './FacebookLogo.svg';
import logoInsta from './InstagramLogo.svg';
import logoLikedin from './LinkedinLogo.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='Footer'>
        <hr />
        <div>
            <a href="/" className='active'>Home</a>
            <a href="/pessoa-usuaria">Pessoa Usuária</a>
            <a href="profissional">Profissional</a>
        </div>
        <div>
            <a href="/" ><img src={logoFace} alt="Logo do facebook" /></a>
            <a href="/pessoa-usuaria"><img src={logoInsta} alt="Logo do Instagram" /></a>
            <a href="profissional"><img src={logoLikedin} alt="Logo do Linkedin" /></a>
        </div>
        <h3>Desafio Front-end Lacrei</h3>
    </footer>
  );
}