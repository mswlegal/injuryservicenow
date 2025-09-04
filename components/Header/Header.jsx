import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { headerData } from './HeaderData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    navDropdowns.forEach(navDropdown => {
      const parentNavItem = navDropdown.parentNode;
      parentNavItem.insertAdjacentHTML(
        'beforeend',
        '<a class="nav-dropdown-toggle" href="#"><i class="fa-solid fa-angle-down"></i></a>'
      );
    });

    const navDropdownToggles = document.querySelectorAll(
      '.nav-dropdown-toggle'
    );
    navDropdownToggles.forEach(navDropdownToggle => {
      const parentNavItem = navDropdownToggle.parentNode;
      const navDropdown = parentNavItem.querySelector('.nav-dropdown');

      navDropdownToggle.addEventListener('click', e => {
        if (navDropdownToggle.classList.contains('active')) {
          navDropdownToggle.classList.remove('active');
          navDropdown.classList.remove('show');
        } else {
          navDropdownToggle.classList.add('active');
          navDropdown.classList.add('show');
        }
        e.preventDefault();
      });
    });
  }, []);

  return (
    <>
      <div className="header-placeholder"></div>
      <div className="header with-placeholder">
        <div className="container-fluid">
          {/* Logo */}
          <div className="header-logo">
            <Link href="/">
              <Image src={headerData.logoImg} width={80} height={80} />
            </Link>
          </div>
          {/* Menu */}
          <div
            ref={menuRef}
            className={`header-menu ${isMenuOpen ? 'show' : ''}`}
          >
            <ul className="nav">
              {headerData.menu.map((menuItem, index) => (
                <li key={index} className="nav-item">
                  <Link href={menuItem.link} className="nav-link">
                    {menuItem.label}
                  </Link>
                  {menuItem.submenu && (
                    <ul className="nav-dropdown">
                      {menuItem.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="nav-dropdown-item">
                          <Link
                            href={subItem.link}
                            className="nav-dropdown-link"
                          >
                            {subItem.label}
                          </Link>
                          {subItem.navdropdown && (
                            <ul className="nav-subdropdown">
                              {subItem.navdropdown.map((item, index) => (
                                <li
                                  key={index}
                                  className="nav-subdropdown-item"
                                >
                                  <Link
                                    href={item.link}
                                    className="nav-subdropdown-link"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            {/* Mobile Menu Close button */}
            <button
              onClick={toggleMenu}
              id="menu-close"
              className="button-circle button-circle-sm"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="menu-toggle">
            Menu
            <span></span>
          </button>
        </div>
        {/* end container-fluid */}
      </div>
    </>
  );
};

export default Header;
