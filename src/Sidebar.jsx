import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { links, social } from './data';
import logo from './logo.svg';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
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
