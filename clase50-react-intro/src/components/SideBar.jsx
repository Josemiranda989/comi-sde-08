import React from 'react'

export const SideBar = () => {
    return (
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/*  <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" src="/images/logo-DH.png" alt="Digital House" />
                </div>
            </a>

            {/*     <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/*     <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - DH movies</span></a>
            </li>

            {/*     <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/*     <!-- Heading --> */}
            <div className="sidebar-heading">Actions</div>

            {/*     <!-- Nav Item - Pages --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="/">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
            </li>

            {/*     <!-- Nav Item - Charts --> */}
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li>

            {/*     <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    )
}
