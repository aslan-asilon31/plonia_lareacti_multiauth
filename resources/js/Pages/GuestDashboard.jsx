import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

import '@/assets/backend/vendor/fonts/boxicons.css'
import '@/assets/backend/vendor/css/core.css'
import '@/assets/backend/vendor/css/theme-default.css'
import '@/assets/backend/css/demo.css'
import '@/assets/backend/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
import '@/assets/backend/vendor/libs/apex-charts/apex-charts.css'

// images
import image1 from "@/assets/backend/img/avatars/1.png"
import image2 from "@/assets/backend/img/illustrations/man-with-laptop-light-guest.png"
import image3 from "@/assets/backend/img/icons/unicons/chart-success.png"
import image4 from "@/assets/backend/img/icons/unicons/wallet-info.png"
import image5 from "@/assets/backend/img/icons/unicons/wallet.png"
import image6 from "@/assets/backend/img/icons/unicons/paypal.png"
import image7 from "@/assets/backend/img/icons/unicons/chart.png"
import image8 from "@/assets/backend/img/icons/unicons/cc-success.png"
import image9 from "@/assets/backend/img/icons/unicons/cc-warning.png"

import SidebarGuest from '../Components/backend/SidebarGuest'
import Footer from '../Components/backend/Footer'

export default function GuestDashboard({ auth }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  return (
    <>

      <style>
        {
            `
            .ukuran1 {
                font-size:25px;
            },
            `
        }
      </style>

    {/* <!-- Layout wrapper --> */}
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* <!-- Menu --> */}

        <SidebarGuest/>
        {/* <!-- / Menu --> */}

        {/* <!-- Layout container --> */}
        <div className="layout-page">
          {/* <!-- Navbar --> */}

          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a className="nav-item nav-link px-0 me-xl-4" href="">
                <i className="bx bx-menu bx-sm"></i>
              </a>
            </div>

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

              <ul className="navbar-nav flex-row align-items-center ms-auto">
                {/* <!-- Place this tag where you want the button to render. --> */}
                <li className="nav-item lh-1 me-3">
                  <a
                    className="github-button"
                    href=""
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                    >{auth.name}</a>
                </li>

                {/* <!-- User --> */}
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <a className="nav-link dropdown-toggle hide-arrow" href="" data-bs-toggle="dropdown">
                    <div className="avatar avatar-online">
                      <img src={image1} className="w-px-40 h-auto rounded-circle" />
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <img src={image1} className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <span className="fw-semibold d-block">John Doe</span>
                            <small className="text-muted">Admin</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bx bx-user me-2"></i>
                        <span className="align-middle">My Profile</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bx bx-cog me-2"></i>
                        <span className="align-middle">Settings</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="d-flex align-items-center align-middle">
                          <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                          <span className="flex-grow-1 align-middle">Billing</span>
                          <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/logout">
                        <i className="bx bx-power-off me-2"></i>
                        <span className="align-middle">Log Out</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <!--/ User --> */}
              </ul>
            </div>
          </nav>

          {/* <!-- / Navbar --> */}

          {/* <!-- Content wrapper --> */}
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                <div className="col-lg-12 mb-4 order-0">
                  <div className="card">
                    <div className="d-flex align-items-end row">
                      <div className="col-sm-7 mb-20">
                        <div className="card-body">
                          <h5 className="card-title text-primary" style={{ fontSize:"25px" }}>Welcome {auth.name}! 🎉</h5>
                          <p className="mb-4 ">
                            <span className="ukuran1">You are login as</span>  <a className="fw-bold " style={{ fontSize:"40px" }}>  Guest</a> 
                          </p>

                        </div>
                      </div>
                      <div className="col-sm-5 text-center text-sm-left">
                        <div className="card-body pb-0 px-0 px-md-4">
                          <img
                            src={image2}
                            height="140"
                            alt="View Badge User"
                            data-app-dark-img="illustrations/man-with-laptop-dark.png"
                            data-app-light-img="illustrations/man-with-laptop-light.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- / Content --> */}

            {/* <!-- Footer --> */}
            <Footer/>
            {/* <!-- / Footer --> */}

            <div className="content-backdrop fade"></div>
          </div>
          {/* <!-- Content wrapper --> */}
        </div>
        {/* <!-- / Layout page --> */}
      </div>

      {/* <!-- Overlay --> */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
    {/* <!-- / Layout wrapper --> */}
    </>
    
  );




{/* 
   return (
     <Authenticated */}
  {/* //     auth={props.auth}
  //     errors={props.errors}
  //     header={ */}
  {/* //       <h2 className="text-xl font-semibold leading-tight text-gray-800">
  //         Admin Dashboard
  //       </h2>
  //     }
  //   >
  //     <Head title="Admin Dashboard" /> */}

  {/* //     <div className="py-12">
  //       <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
  //         <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
  //           <div className="p-6 bg-white border-b border-gray-200">
  //             You're logged in as Admin!
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </Authenticated>
  // ); */}


}