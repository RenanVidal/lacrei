import './Header.css'

export default function Header() {
  return (
    <header className='Header'>
        <a href="/">Lacrei</a>
        <nav>
            <a href="/" className='active'>Home</a>
            <a href="/pessoa-usuaria">Pessoa Usuária</a>
            <a href="profissional">Profissional</a>
        </nav>
    </header>
  );
}
