import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Library System</h1>
      <nav>
        <ul>
          <li>
            <Link to="/add-view-book">Add/View Book</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
