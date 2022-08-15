import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'
import {
  container,
  navbar,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  return (
   
    <div className={container}>
      
      <title>{pageTitle}</title>
      <nav className={navbar}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Αρχικη
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/kok" className={navLinkText}>
            Ωραριο
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/pop" className={navLinkText}>
             Καταλογος
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="https://www.e-food.gr/delivery/kallithea/mpakalokafeneion?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action" target="_blank" className={navLinkText}>
        Παραγγειλτε τωρα απο E-Food
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
            Παραγγειλτε τωρα στο 211-42-47-089
            </Link>
          </li>

          <li className={navLinkItem}>
            <Link to="https://www.google.com/maps/place/%CE%9C%CF%80%CE%B1%CE%BA%CE%B1%CE%BB%CE%BF%CE%BA%CE%B1%CF%86%CE%B5%CE%BD%CE%B5%CE%B9%CE%BF%CE%BD/@37.9550803,23.7129224,15z/data=!4m5!3m4!1s0x0:0xb8d6f2fb07d71245!8m2!3d37.9550752!4d23.7129292" target="_blank" className={navLinkText}>
      Που ειμαστε
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="https://www.google.com/maps/place/Mpakalokapheneion/@37.955145,23.7128361,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMqm0SA_FkiM6rgCWH9ElL-XyVg7eaxknlaBCm_!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMqm0SA_FkiM6rgCWH9ElL-XyVg7eaxknlaBCm_%3Dw191-h86-k-no!7i4000!8i1800!4m12!1m6!3m5!1s0x0:0xb8d6f2fb07d71245!2sMpakalokapheneion!8m2!3d37.9550752!4d23.7129292!3m4!1s0x0:0xb8d6f2fb07d71245!8m2!3d37.9550752!4d23.7129292" target="_blank" className={navLinkText}>
      Φωτογραφιες
            </Link>
          </li>
         
        </ul>
      </nav>
    
  
     

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
    
  )
}

export default Layout