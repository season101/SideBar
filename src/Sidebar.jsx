import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar show-sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((socialLink) => {
          return (
            <li key={socialLink.id}>
              <a href={socialLink.url}>{socialLink.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
