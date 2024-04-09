import "./main.css";
import React, { useEffect, useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
export default function Header() {
  const [dom, setDom] = useState(null);
  useEffect(() => {
    const $ = document.querySelector.bind(document);
    setDom({
      searchButton: $("#search-button"),
      searchClose: $("#search-close"),
      searchContent: $("#search-content"),
      loginButton: $("#login-button"),
      loginClose: $("#login-close"),
      loginContent: $("#login-content"),
      themeButton: $("#theme-button"),
    });
  }, []);

  return (
    <div>
      {/*<!--==================== HEADER ====================-->*/}
      <header className="header" id="header">
        <nav className="nav nav__container">
        
          <a href="#" className="nav__logo">
          <i class="ri-flashlight-fill"></i>
            王者荣耀KPL数据可视化大屏
          </a>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link">
                  <i class="ri-home-line"></i>
                  <span>Home</span>
                </a>
              </li>

            </ul>
          </div>

          <div className="nav__actions">
            {/* theme button */}
            <ThemeButton></ThemeButton>
          </div>
        </nav>
      </header>
    </div>
  );
}
