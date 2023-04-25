import React from 'react'
import { Link, Head } from '@inertiajs/react';

import { useState } from 'react';


function SidebarGuest({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);


    return (
    <>

<style>
        {
            `.coloractive {
              background-color: red;
              color: purple;
              font-weight:bolder;
            },
             .hilangkan{
              visibility:hidden;
             }
            `
        }
</style>

         <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo">
            <a href="index.html" className="app-brand-link">

              <span className="app-brand-text demo menu-text fw-bolder ms-2">Suktura</span>
            </a>

            <a href="" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div className="menu-inner-shadow"></div>

          <ul className="menu-inner py-1">
            {/* <!-- Dashboard --> */}
            <li className="menu-item active">
              <a href="/dashboard" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </a>
            </li>

            <li className="menu-item cobaplace" >
              <a href="/" className="menu-link ">
                <i className="menu-icon tf-icons bx bxl-product-hunt"></i>
                <div data-i18n="Analytics">Product</div>
              </a>
            </li>

            <li className="menu-item cobaplace" >
              <a href="/" className="menu-link ">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">My Profile</div>
              </a>
            </li>

            <li className="menu-item ">
              <a className="menu-link">
                <i className="menu-icon tf-icons bx bx-log-out"></i>
                <Link href={route('logout')} method="post" as="button">
                          Log Out
                </Link>
              </a>
            </li>

          </ul>
        </aside>
  </>
        );
}

export default SidebarGuest;
