import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((socialLink) => {
          return (
            <li>
              <a href={socialLink.url}>{socialLink.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
