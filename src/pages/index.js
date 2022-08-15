import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import {
  heading1,
  tot,





} from '../components/layout.module.css'

const IndexPage = () => {




  return (

    
    <Layout pageTitle="Καλως ορισατε στο">

<h1 className={heading1}> <p>ΜΠΑΚΑΛΟΚΑΦΕΝΕΙΟΝ</p> </h1>
<div className={tot}>
<StaticImage
    alt=""
    src="../images/icon2.png"
    layout="fullWidth"
    
    />
     </div>


     <div className={tot}>
<StaticImage
    alt=""
    src="../images/icon.png"
    layout="fullWidth"
    
    />
     </div>

    
   
  

   
     




  








    </Layout>
  )
}

export default IndexPage