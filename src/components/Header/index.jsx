import './Header.css'

export default function Header() {
  return (
    <header className='Header'>
        <a href="/">Lacrei</a>
        <nav>
            <a href="/" className='active' onClick = {() => handlePageChange('Home')}>Home</a>
            <a href="/user-person" onClick = {() => handlePageChange('User')}>Pessoa Usuária</a>
            <a href="/professional" onClick = {() => handlePageChange('Professional')}>Profissional</a>
        </nav>
    </header>
  );
}
