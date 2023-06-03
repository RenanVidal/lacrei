import './Header.css'

export default function Header() {
  return (
    <header className='Header'>
        <a href="/">Lacrei</a>
        <nav>
            <a href="/">Home</a>
            <a href="/user-person" >Pessoa Usuária</a>
            <a href="/professional" >Profissional</a>
        </nav>
    </header>
  );
}
