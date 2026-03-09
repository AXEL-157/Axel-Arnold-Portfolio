import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaTools, FaFolderOpen } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/profil", label: "contacter", icon: <FaUser /> },
    { path: "/skills", label: "Skills", icon: <FaTools /> },
    { path: "/projects", label: "Projects", icon: <FaFolderOpen /> },
  ];

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-item ${
            location.pathname === item.path ? "active" : ""
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
