import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {PiShieldCheckBold, PiHouseLight, PiClipboardTextLight } from "react-icons/pi";
import HeaderCss from "../styles/Header.module.css";
import logo from "/logo.png";

const Header = () => {
/*
   const [currentPage, setCurrentPage] = useState('');
   const [navLinkTitle, setNavLinkTitle] = useState('');
   const [navLinkPath, setNavLinkPath] = useState('');

   useEffect(() => {
    const currentPath = window.location.pathname;
    setCurrentPage(currentPath);}, []
   );


   const getPageInfo = (path) => {
    switch (path) {
        case '/':
            return {title: 'Historial', path: '/cotizaciones'};
        case '/cotizaciones':
            return {title: 'Inicio', path: '/'};
        default:
            return {title: 'Unknown', path: '/'};
    }
   }; 
   

   useEffect(() => {
    const pageInfo = getPageInfo(currentPage);
    setNavLinkTitle(pageInfo.title);
    setNavLinkPath(pageInfo.path);
   }, [currentPage]
   );

   const getPageInfo = () => {
    if (navLinkPath === '/'){
        return {title: 'Historial', path: '/cotizaciones'};
    } else  {
        return {title: 'Inicio', path: '/'};
    }
   };

    <NavLink to={navLinkPath}> {navLinkTitle} </NavLink>
   
   */
    return (
    <>
    <header className={HeaderCss.header}>
        
        <h2> <img src={logo} alt="logo" />Cotizador de seguros de técnologia portátil</h2>
        <nav>
            <Link to="/cotizaciones">
                <PiClipboardTextLight />Cotizaciones
            </Link>
            <Link to="/">
                <PiHouseLight />Inicio
            </Link>
        </nav>
    </header>
    
    
    </>
    );
};
export default Header;