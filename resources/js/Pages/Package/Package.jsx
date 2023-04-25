import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

import React, { useEffect, useState } from 'react';
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

import Sidebar from '@/Components/backend/SidebarAdmin'
import Footer from '@/Components/backend/Footer'

export default function Package({ auth,props }) {

    // Declaration
    const [packages, setPackages] = useState([])

    useEffect(()=>{
        fetchPackages() 
    },[])
  
    // Show Data 
    const fetchPackages = async () => {
        await axios.get(`http://localhost:8000/api/packages`).then(({data})=>{
            setPackages(data)
        })
    }


      const deletePackage = async (id) => {
    const isConfirm = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        return result.isConfirmed
      });

      if(!isConfirm){
        return;
      }

      await axios.delete(`http://localhost:8000/api/packages/${id}`).then(({data})=>{
        Swal.fire({
            icon:"success",
            text:data.message
        })
        fetchPackages()
      }).catch(({response:{data}})=>{
        Swal.fire({
            text:data.message,
            icon:"error"
        })
      })
    }

  return (
    <AuthenticatedLayout user={auth.user}>

    <>


    {/* <!-- Layout wrapper --> */}
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* <!-- Menu --> */}

        <Sidebar/>
        {/* <!-- / Menu --> */}

        {/* <!-- Layout container --> */}
        <div className="layout-page">

          {/* <!-- Content wrapper --> */}
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">

              <div className="card">
                <h5 className="card-header">Package List</h5>
                <a type="button" className="btn btn-primary">
                    <i className="menu-icon tf-icons bx bx-plus"></i> Add Package
                </a>
                <div className="table-responsive text-nowrap">
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th>Country</th>
                        <th>Desc</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">

                    {
                                packages.length > 0 && (
                                    packages.map((row, key)=>(
                                        <tr key={key}>
                                            <td>{row.country}</td>
                                            <td>{row.description_package}</td>
                                            <td>Rp {row.price}</td>
                                            <td>
                                                <button type="button" className="m-2 btn btn-info p-0 ">
                                                    <i className="bx bx-bullseye"></i>
                                                </button>
                                                <button to={`/package/edit/${row.id}`} className="m-2 btn btn-success p-0 ">
                                                    <i className="bx bx-edit"></i>
                                                </button>
                                                <button variant="danger" onClick={()=>deletePackage(row.id)} className="m-2 btn btn-danger p-0 ">
                                                    <i className="bx bx-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }
                    </tbody>
                  </table>
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

    </AuthenticatedLayout>

    
  );


}