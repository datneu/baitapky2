
import './Main.css';

function Main() {
  return (
    <div className="main">
      <h4>Content Section</h4>
      <p>This is the content of the app. It can include various element and component.</p>
      <button type="button" class="btn btn-dark">Click me</button>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link" href="#">Item1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Item2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Item3</a>
        </li>
      </ul>
      <span>@2023 My app. All right reserved</span>
    </div>
  );
}

export default Main;
