import './Header.css'

export default function Header() {
  return (
    <header className='Header'>
        <a href="/">Lacrei</a>
        <nav>
            <a href="/" className='active'>Home</a>
            <a href="../../pages/UserPerson.jsx">Pessoa Usuária</a>
            <a href="../../pages/Professional.jsx">Profissional</a>
        </nav>
    </header>
  );
}
