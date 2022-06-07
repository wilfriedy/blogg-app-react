import { Link } from "react-router-dom";
import navstyles from './Nav.css'
export default function Nav() {
  return (
    <nav style={navstyles}>
      <Link to="/">
        <h3>Daily news</h3>
      </Link>
      <Link to="/create">
        <h3>Post news</h3>
      </Link>
    </nav>
  );
}
