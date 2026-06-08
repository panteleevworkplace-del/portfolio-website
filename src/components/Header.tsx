export default function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="logo">artem</a>
      <nav aria-label="Main navigation">
        <a className="nav-works" href="#works">works</a>
        <a className="nav-touch" href="#contact">get in touch</a>
      </nav>
    </header>
  );
}