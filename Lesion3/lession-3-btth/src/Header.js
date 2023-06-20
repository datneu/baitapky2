
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h2>Welcom to my app</h2>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
