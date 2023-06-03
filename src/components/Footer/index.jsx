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
            <a href="/user-person" >Pessoa Usuária</a>
            <a href="/professional" >Profissional</a>
        </div>
        <div>
            <a href="https://www.facebook.com/lacrei.saude" target='_blank' ><img src={logoFace} alt="Logo do facebook" /></a>
            <a href="https://www.instagram.com/lacrei.saude/" target='_blank' ><img src={logoInsta} alt="Logo do Instagram" /></a>
            <a href="https://www.linkedin.com/company/lacrei" target='_blank' ><img src={logoLikedin} alt="Logo do Linkedin" /></a>
        </div>
        <h3>Desafio Front-end Lacrei</h3>
    </footer>
  );
}