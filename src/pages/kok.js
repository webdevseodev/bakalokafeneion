import * as React from 'react'
import Layout from '../components/layout'
import {
    shopprofilemenusection,
    areadescription,
    buttonzagolovki,
    span,
    colo,
    gogo,
    papa,
    areaparagraf2,
    areaparagraf3,
    pricebutton,
    areaparagraf,
    shopprofilemenulistitem,
    shopprofilemenulistitemimg,
    shopprofilemenusectionheading,
    areadivimage,
    navbar,
    heading1,
    navLinks,
    navLinkItem,
    navLinkItem2,
    navLinkText
  } from '../components/layout.module.css'
  import { Link } from 'gatsby'
  import { StaticImage } from 'gatsby-plugin-image'


  const AgerRutt = () => {
    return (
  
     
      <Layout >

<div className={colo}>
 <div className={gogo}>
  <h3 className="h2 font-weight-bold mb-5">Ωράριο καταστήματος</h3>
  <ul className="list-unstyled">
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Δευτέρα </span>
      <span className="float-right text-grey"> - 06:00-18:00</span>
    </li>
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Τρίτη </span>
 <span className="float-right text-grey"> - 06:00-18:00</span>  
   </li>
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Τετάρτη </span>
       <span className="float-right text-grey"> - 06:00-18:00</span>
    </li>
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Πέμπτη </span>
       <span className="float-right text-grey"> - 06:00-18:00</span>
    </li>
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Παρασκευή </span>
       <span className="float-right text-grey"> - 06:00-18:00</span>
    </li>
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Σάββατο </span>
      <span className="float-right text-grey"> - 06:00-18:00</span>
    </li>
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Κυριακή </span>
      <span className="ml-3 badge badge-green text-uppercase" />
       <span className="float-right text-grey"> - 06:00-18:00</span>
    </li>
  </ul>
</div>

<div className={gogo}>
  <h3 className="h2 font-weight-bold mb-5">Ωράριο Delivery</h3>
  <ul className="list-unstyled">
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Δευτέρα </span>
      <span className="float-right text-grey"> - 07:30-15:30</span>
    </li>
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Τρίτη </span>
      <span className="float-right text-grey"> - 07:30-15:30</span>
    </li>
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Τετάρτη </span>
      <span className="float-right text-grey"> - 07:30-15:30</span>
    </li>
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Πέμπτη </span>
      <span className="float-right text-grey"> -07:30-15:30</span>
    </li>
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Παρασκευή</span>
      <span className="float-right text-grey"> - 07:30-15:30</span>
    </li>
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Σάββατο</span>
      <span className="float-right text-grey"> - 07:30-15:30</span>
    </li>
    <li className="border-bottom font-weight-bold py-4">
      <span className="font-weight-bold">Κυριακή </span>
      <span className="ml-3 badge badge-green text-uppercase" />
      <span className="float-right text-grey"> - Δεν γινεται διανομη</span>
    </li>
  </ul>
</div>

</div>
<StaticImage
alt=""
src="../images/icon2.png"
layout="fullWidth"

/>
</Layout>
  )
}
export default AgerRutt