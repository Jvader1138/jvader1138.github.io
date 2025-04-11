import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <center>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/culvers">Culver's</Link></li>
        </ul>
      </center>
    </div>
  )
}