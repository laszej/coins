import Link from "next/link";
import Image from "next/image";
import CodeIcon from "../public/code.svg";
import twitter from "../public/twitter.svg";
import facebook from "../public/facebook.svg";
import Head from "next/head";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark-custom"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={CodeIcon} alt="Code" height={60} width={60} />
          <h5
            style={{
              fontWeight: "bold",
              color: "#00B8D4",
              letterSpacing: "0.15rem",
              marginTop: "0.5rem",
            }}
          >
            Stanisław Laskowski front-end developer
          </h5>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link href="/coins" className="nav-link">Coins</Link>
            </li>

            <div className="dropdown nav-item bg-dark-custom">
  <button
    className="btn dropdown-toggle nav-link"
    type="button"
    id="dropdownMenuButton"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Portfolio
  </button>
  <div className="dropdown-menu bg-dark-custom " aria-labelledby="dropdownMenuButton">
    <Link href="/vanilla" className="nav-link dark-link">Vanilla JS</Link>
  </div>
</div>

            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>

            <div className="nav-item ms-3" id="socials">
              <Link
                href="https://www.facebook.com/laszej"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <Image src={facebook} alt="Code" height={20} width={20} />
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <Image
                  src={twitter}
                  alt="Code"
                  height={20}
                  width={20}
                  className="twitter"
                />
              </Link>
            </div>
          </ul></div>
</div>
</nav>
);
};

export default Navbar;