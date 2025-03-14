import "./Header.css";
import logoimg from "../assets/logoimg.png";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function showSidebar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header>
        <nav className="big-nav">
          <ul>
            <li>
              <a href="/">
                <img src={logoimg} alt="logo" width={200} />
              </a>
            </li>
            <li>Home</li>

            <li>
              <a href="#">Services</a>
              <ul className="dropdown">
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">SEO</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
              </ul>
            </li>
            <li>Portfolio</li>
            <li>Company</li>
            <li className="menu-toggle" onClick={showSidebar}>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="#1f1f1f"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        {isOpen && (
          <nav className="small-nav">
            <ul className="sidebar" style={{ display: "flex" }}>
              <li className="menu-toggle" onClick={showSidebar}>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="26px"
                    viewBox="0 -960 960 960"
                    width="26px"
                    fill="#1f1f1f"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </a>
              </li>
              <li>Home</li>

              <li>
                <a href="#">Services</a>
                <ul className="dropdown">
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">SEO</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                </ul>
              </li>
              <li>Portfolio</li>
              <li>Company</li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
