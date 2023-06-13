import logoFace from './FacebookLogo.svg';
import logoInsta from './InstagramLogo.svg';
import logoLikedin from './LinkedinLogo.svg';
import MenuLinks from '../MenuLinks';
import styles from './Baseboard.module.css';

export default function Footer() {
  return (
    <footer className={styles.baseboard}>
        <hr />
        <div>
          <MenuLinks to="/" style={styles.baseboardActive}>Home</MenuLinks>
          <MenuLinks to="/user-person"  style={styles.baseboardActive} >Pessoa Usuária</MenuLinks>
          <MenuLinks to="/professional"  style={styles.baseboardActive} >Profissional</MenuLinks>
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