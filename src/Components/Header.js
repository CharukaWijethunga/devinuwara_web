import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {Button} from "reactstrap";
const Header = () => {
    const { t } = useTranslation();
        const { i18n } = useTranslation();

        function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
      }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">{t('tag_line')}</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">{t('home')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/rituals" className="nav-link">{t('rituals')}</Link>
          </li>
            <li className="nav-item">
            <Link to="/news" className="nav-link">{t('news')}</Link>
          </li>
            <li className="nav-item">
            <Link to="/donation" className="nav-link">{t('donation')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">{t('contact')}</Link>
          </li>
            <Button className="btn-sm" onClick={changeLanguage} value='en'>en</Button>
              <Button className="btn-sm" onClick={changeLanguage} value='es'>sin</Button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;