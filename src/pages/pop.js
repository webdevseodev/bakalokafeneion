import * as React from 'react'
import Layout from '../components/layout'
import {
    shopprofilemenusection,
    areadescription,
    buttonzagolovki,
    span,
    areaparagraf2,
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
    navLinkText
  } from '../components/layout.module.css'
  import { Link } from 'gatsby'
  import { StaticImage } from 'gatsby-plugin-image'
  





const AgerRu = () => {
  return (

   
    <Layout >
 {/* <nav className={navbar}>
  <ul className={navLinks}>
    <li className={navLinkItem}>
      <Link to="/" className={navLinkText}>
      На главную страницу
      </Link>
    </li>
    <li className={navLinkItem}>
      <Link to="/about" className={navLinkText}>
Категории
      </Link>
    </li>
    <li className={navLinkItem}>
            <Link to="/theolLifeRu/heaven_hell_ru" className={navLinkText}>
          Назад
            </Link>
          </li>
   
          <li className={navLinkItem}>
            <Link to="https://www.e-food.gr/delivery/kallithea/mpakalokafeneion?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action" target="_blank" className={navLinkText}>
         menu
            </Link>
          </li>
   
          <li className={navLinkItem}>
            <Link to="https://www.google.com/maps/place/%CE%9C%CF%80%CE%B1%CE%BA%CE%B1%CE%BB%CE%BF%CE%BA%CE%B1%CF%86%CE%B5%CE%BD%CE%B5%CE%B9%CE%BF%CE%BD/@37.9550803,23.7129224,15z/data=!4m5!3m4!1s0x0:0xb8d6f2fb07d71245!8m2!3d37.9550752!4d23.7129292" target="_blank" className={navLinkText}>
      pou eimaste
            </Link>
          </li>
          <li className={navLinkItem}>
    <div>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        External link
      </a>
    </div>
    </li>


    
  
   



  </ul>
</nav> */}
<h1 className={heading1}><p>Καταλογος</p> </h1>

{/* <StaticImage
        alt=""
        src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-strudel-me-gemisi-milo-kai-kanela-125gr?c=1639581277"
        layout="fullWidth"
        
      /> */}

<div className="px-5 py-8 px-md-9 bg-white box-shadow rounded">
  <div id="menu-list-content">
    <div
      id="prosfores"
      className={shopprofilemenusection}
      data-section-offers={3}
      data-section-items={0}
      data-has-only-offers="true"
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#prosforesCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">Προσφορές </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="prosforesCollapse"
      >
        <li
         className={shopprofilemenulistitem}
          data-offer_id={524288}
          data-offer-name="1 Καφές της επιλογής σας & 1 νερό 500ml"
          data-position={0}
          data-price=""
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                1 Καφές της επιλογής σας &amp; 1 νερό 500ml{" "}
              </p>
              <span className="mr-3">
                <button
                  type="button"
                  className={pricebutton}
                >
                  <span className={span}>1,60€</span>
                </button>
              </span>
              <div className="d-inline-block">
                <div
                  className="dynamic-badge"
                  style={{ backgroundColor: "#edf7ee", color: "#00bc8b" }}
                ></div>
              </div>
            </div>
          </div>
        </li>
        <li
         className={shopprofilemenulistitem}
          data-offer_id={524289}
          data-offer-name="1 Καφές της επιλογής σας, 1 τοστ της επιλογής σας & 1 νερό 500ml"
          data-position={1}
          data-price=""
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                1 Καφές της επιλογής σας, 1 τοστ της επιλογής σας &amp; 1 νερό
                500ml{" "}
              </p>
              <span className="mr-3">
                <button
                  type="button"
                  className={pricebutton}
                >
                  <span className={span}>2,80€</span>
                </button>
              </span>
              <div className="d-inline-block">
                <div
                  className="dynamic-badge"
                  style={{ backgroundColor: "#edf7ee", color: "#00bc8b" }}
                ></div>
              </div>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-offer_id={524290}
          data-offer-name="1 Καφές της επιλογής σας, 1 μπαγκέτα της επιλογής σας & 1 νερό 500ml"
          data-position={2}
          data-price=""
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                1 Καφές της επιλογής σας, 1 μπαγκέτα της επιλογής σας &amp; 1
                νερό 500ml{" "}
              </p>
              <span className="mr-3">
                <button
                  type="button"
                  className={pricebutton}
                >
                  <span className={span}>3,00€</span>
                </button>
              </span>
              <div className="d-inline-block">
                <div
                  className="dynamic-badge"
                  style={{ backgroundColor: "#edf7ee", color: "#00bc8b" }}
                ></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="dimofilestera"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={9}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#dimofilesteraCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">Δημοφιλέστερα </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="dimofilesteraCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000049"
          data-item-name="Σπανακοτυρόπιτα"
          data-item-price="1,6"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Σπανακοτυρόπιτα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,60€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Σπανακοτυρόπιτα"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000049?c=89e9b911b2f879aa3555d4c333e9e442"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000049?c=89e9b911b2f879aa3555d4c333e9e442"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000063"
          data-item-name="Μπαγκέτα λευκή ζαμπόν & gouda"
          data-item-price="2,5"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Μπαγκέτα λευκή ζαμπόν &amp; gouda
              </p>
              <p className={areaparagraf2}>
                Με ζαμπόν, gouda, ντομάτα, μαρούλι &amp; μαγιονέζα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 2,50€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Μπαγκέτα λευκή ζαμπόν & gouda"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000063?c=f2ee425351b81068cb6eaefb140655d5"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000063?c=f2ee425351b81068cb6eaefb140655d5"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000010"
          data-item-name="Freddo espresso"
          data-item-price="1,6"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Freddo espresso
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,60€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Freddo espresso"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000010?c=2723aa02d7d93cf1993d35048fb99211"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                 data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000010?c=2723aa02d7d93cf1993d35048fb99211"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000008"
          data-item-name="Cappuccino"
          data-item-price="1,6"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Cappuccino
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,60€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Cappuccino"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000008?c=c88c3554be687200dd2f6c02ec87bc09"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000008?c=c88c3554be687200dd2f6c02ec87bc09"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000103"
          data-item-name="Πίτσα large"
          data-item-price="2,2"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Πίτσα large
              </p>
              <p className={areaparagraf2}>
                Με σάλτσα ντομάτας, gouda, μπέικον &amp; σαλάμι μπύρας
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,20€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Πίτσα large"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000103?c=48ab6bebc8b0bc93e6838986c8df8145"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000103?c=48ab6bebc8b0bc93e6838986c8df8145"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000011"
          data-item-name="Freddo cappuccino"
          data-item-price="1,6"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Freddo cappuccino
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,60€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Freddo cappuccino"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000011?c=8df66c55f4df0d8b195ab97d4abf3e8f"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000011?c=8df66c55f4df0d8b195ab97d4abf3e8f"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000054"
          data-item-name="Γραβιερόπιτα"
          data-item-price="1,8"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Γραβιερόπιτα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,80€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Γραβιερόπιτα"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000054?c=25b61bee63aa168551d4c86e3515e7d5"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000054?c=25b61bee63aa168551d4c86e3515e7d5"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000056"
          data-item-name="Κουλούρι Θεσσαλονίκης γεμιστό με Philadelphia & πάστα ελιάς"
          data-item-price="1,2"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Κουλούρι Θεσσαλονίκης γεμιστό με Philadelphia &amp; πάστα ελιάς
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,20€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Κουλούρι Θεσσαλονίκης γεμιστό με Philadelphia & πάστα ελιάς"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000056?c=3acd4e6954df949665f1bd76dfb5b1b4"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000056?c=3acd4e6954df949665f1bd76dfb5b1b4"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000057"
          data-item-name="Κουλούρι Θεσσαλονίκης γεμιστό με Philadelphia & γαλοπούλα"
          data-item-price="1,2"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Κουλούρι Θεσσαλονίκης γεμιστό με Philadelphia &amp; γαλοπούλα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,20€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Κουλούρι Θεσσαλονίκης γεμιστό με Philadelphia & γαλοπούλα"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000057?c=55f8609a56cfa8fd0e8ab948c477ac6e"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000057?c=55f8609a56cfa8fd0e8ab948c477ac6e"
              />
              
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="kafedes"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={11}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#kafedesCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">Καφέδες </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="kafedesCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000001"
          data-item-name="Espresso"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Espresso
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Espresso"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:espresso?c=1657203860"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:espresso?c=1657203860"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000012"
          data-item-name="Espresso lungo"
          data-item-price="1,2"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Espresso lungo
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,20€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000013"
          data-item-name="Espresso americano"
          data-item-price="1,2"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Espresso americano
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,20€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000010"
          data-item-name="Freddo espresso"
          data-item-price="1,6"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Freddo espresso
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,60€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Freddo espresso"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000010?c=2723aa02d7d93cf1993d35048fb99211"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000010?c=2723aa02d7d93cf1993d35048fb99211"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000008"
          data-item-name="Cappuccino"
          data-item-price="1,6"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Cappuccino
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,60€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Cappuccino"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000008?c=c88c3554be687200dd2f6c02ec87bc09"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000008?c=c88c3554be687200dd2f6c02ec87bc09"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000009"
          data-item-name="Cappuccino latte"
          data-item-price="1,6"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Cappuccino latte
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,60€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000011"
          data-item-name="Freddo cappuccino"
          data-item-price="1,6"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Freddo cappuccino
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,60€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Freddo cappuccino"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000011?c=8df66c55f4df0d8b195ab97d4abf3e8f"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000011?c=8df66c55f4df0d8b195ab97d4abf3e8f"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000006"
          data-item-name="Nes"
          data-item-price="1,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Nes
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000007"
          data-item-name="Frappe"
          data-item-price="1,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Frappe
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000014"
          data-item-name="Φίλτρου"
          data-item-price="1,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Φίλτρου
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,50€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Φίλτρου"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:philtrou?c=1654524569"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:philtrou?c=1654524569"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000005"
          data-item-name="Ελληνικός"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Ελληνικός
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Ελληνικός"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:ellinikos?c=1657203862"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:ellinikos?c=1657203862"
              />
              
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="rofimata"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={3}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#rofimataCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">Ροφήματα </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="rofimataCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000002"
          data-item-name="Σοκολάτα"
          data-item-price={2}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Σοκολάτα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 2,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Σοκολάτα"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:sokolata?c=1659688441"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:sokolata?c=1659688441"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000030"
          data-item-name="Freddito"
          data-item-price="3,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Freddito
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 3,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000048"
          data-item-name="Φυσικός χυμός ανάμεικτος"
          data-item-price={2}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Φυσικός χυμός ανάμεικτος
              </p>
              <p className={areaparagraf2}>
                Με φρούτα εποχής
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Φυσικός χυμός ανάμεικτος"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:phusikos-xumos-anameiktos?c=1645004279"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:phusikos-xumos-anameiktos?c=1645004279"
              />
              
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="tsai-iced-tea"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={7}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#tsai-iced-teaCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">Τσάι | Iced tea </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="tsai-iced-teaCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000041"
          data-item-name="Τσάι λεμόνι"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Τσάι λεμόνι
              </p>
              <p className={areaparagraf2}>
                Ζεστό
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Τσάι λεμόνι"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:tsai-lemoni?c=1659688468"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:tsai-lemoni?c=1659688468"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000042"
          data-item-name="Τσάι φράουλα"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Τσάι φράουλα
              </p>
              <p className={areaparagraf2}>
                Ζεστό
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Τσάι φράουλα"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:tsai-phraoula?c=1659688468"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:tsai-phraoula?c=1659688468"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000043"
          data-item-name="Τσάι καραμέλα"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Τσάι καραμέλα
              </p>
              <p className={areaparagraf2}>
                Ζεστό
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Τσάι καραμέλα"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:tsai-karamela?c=1657203871"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:tsai-karamela?c=1657203871"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000044"
          data-item-name="Τσάι πράσινο"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Τσάι πράσινο
              </p>
              <p className={areaparagraf2}>
                Ζεστό
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Τσάι πράσινο"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:tsai-prasino?c=1659688469"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:tsai-prasino?c=1659688469"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000045"
          data-item-name="Τσάι βανίλια"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Τσάι βανίλια
              </p>
              <p className={areaparagraf2}>
                Ζεστό
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Τσάι βανίλια"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:tsai-banilia?c=1659688468"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:tsai-banilia?c=1659688468"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000046"
          data-item-name="Τσάι English breakfast"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Τσάι English breakfast
              </p>
              <p className={areaparagraf2}>
                Ζεστό
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Τσάι English breakfast"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:tsai-english-breakfast?c=1657203871"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:tsai-english-breakfast?c=1657203871"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000047"
          data-item-name="Iced tea βατόμουρο με stevia"
          data-item-price="1,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Iced tea βατόμουρο με stevia
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,50€</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="milkshakes-granites"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={8}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#milkshakes-granitesCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">
            Milkshakes | Γρανίτες{" "}
          </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="milkshakes-granitesCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000033"
          data-item-name="Milkshake σοκολάτα"
          data-item-price="3,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Milkshake σοκολάτα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 3,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000035"
          data-item-name="Milkshake βανίλια"
          data-item-price="3,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Milkshake βανίλια
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 3,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000034"
          data-item-name="Milkshake φράουλα"
          data-item-price="3,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Milkshake φράουλα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 3,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000036"
          data-item-name="Γρανίτα λεμόνι"
          data-item-price={2}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Γρανίτα λεμόνι
              </p>
              <p className={areaparagraf2}>
                Χωρίς ζάχαρη
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 2,00€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000037"
          data-item-name="Γρανίτα λεμόνι & φράουλα"
          data-item-price={2}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Γρανίτα λεμόνι &amp; φράουλα
              </p>
              <p className={areaparagraf2}>
                Χωρίς ζάχαρη
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 2,00€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000038"
          data-item-name="Γρανίτα ανανάς, mango & αγαύη"
          data-item-price={2}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Γρανίτα ανανάς, mango &amp; αγαύη
              </p>
              <p className={areaparagraf2}>
                Χωρίς ζάχαρη
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 2,00€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000039"
          data-item-name="Γρανίτα μοσχολέμονο & αγαύη"
          data-item-price={2}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Γρανίτα μοσχολέμονο &amp; αγαύη
              </p>
              <p className={areaparagraf2}>
                Χωρίς ζάχαρη
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 2,00€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000040"
          data-item-name="Γρανίτα πράσινο μήλο & ρόδι"
          data-item-price={2}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Γρανίτα πράσινο μήλο &amp; ρόδι
              </p>
              <p className={areaparagraf2}>
                Χωρίς ζάχαρη
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 2,00€</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="sfoliates"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={14}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#sfoliatesCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">Σφολιάτες </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="sfoliatesCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000049"
          data-item-name="Σπανακοτυρόπιτα"
          data-item-price="1,6"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Σπανακοτυρόπιτα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,60€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Σπανακοτυρόπιτα"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000049?c=89e9b911b2f879aa3555d4c333e9e442"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000049?c=89e9b911b2f879aa3555d4c333e9e442"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000050"
          data-item-name="Τυρόπιτα βουτύρου"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Τυρόπιτα βουτύρου
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000051"
          data-item-name="Λουκανικόπιτα"
          data-item-price="1,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Λουκανικόπιτα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000052"
          data-item-name="Κρουασάν ζαμπόν & τυρί κρέμα"
          data-item-price={2}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Κρουασάν ζαμπόν &amp; τυρί κρέμα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,00€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000103"
          data-item-name="Πίτσα large"
          data-item-price="2,2"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Πίτσα large
              </p>
              <p className={areaparagraf2}>
                Με σάλτσα ντομάτας, gouda, μπέικον &amp; σαλάμι μπύρας
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,20€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Πίτσα large"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000103?c=48ab6bebc8b0bc93e6838986c8df8145"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000103?c=48ab6bebc8b0bc93e6838986c8df8145"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000104"
          data-item-name="Πεϊνιρλί"
          data-item-price="2,2"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Πεϊνιρλί
              </p>
              <p className={areaparagraf2}>
                Με σάλτσα ντομάτας, gouda &amp; μπέικον
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,20€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000054"
          data-item-name="Γραβιερόπιτα"
          data-item-price="1,8"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Γραβιερόπιτα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,80€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Γραβιερόπιτα"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000054?c=25b61bee63aa168551d4c86e3515e7d5"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000054?c=25b61bee63aa168551d4c86e3515e7d5"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000055"
          data-item-name="Κουλούρι Θεσσαλονίκης"
          data-item-price="0,6"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Κουλούρι Θεσσαλονίκης
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>0,60€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Κουλούρι Θεσσαλονίκης"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:koulouri-thessalonikis?c=1649870447"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:koulouri-thessalonikis?c=1649870447"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000056"
          data-item-name="Κουλούρι Θεσσαλονίκης γεμιστό με Philadelphia & πάστα ελιάς"
          data-item-price="1,2"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Κουλούρι Θεσσαλονίκης γεμιστό με Philadelphia &amp; πάστα ελιάς
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,20€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Κουλούρι Θεσσαλονίκης γεμιστό με Philadelphia & πάστα ελιάς"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000056?c=3acd4e6954df949665f1bd76dfb5b1b4"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000056?c=3acd4e6954df949665f1bd76dfb5b1b4"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000057"
          data-item-name="Κουλούρι Θεσσαλονίκης γεμιστό με Philadelphia & γαλοπούλα"
          data-item-price="1,2"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Κουλούρι Θεσσαλονίκης γεμιστό με Philadelphia &amp; γαλοπούλα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,20€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Κουλούρι Θεσσαλονίκης γεμιστό με Philadelphia & γαλοπούλα"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000057?c=55f8609a56cfa8fd0e8ab948c477ac6e"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000057?c=55f8609a56cfa8fd0e8ab948c477ac6e"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000058"
          data-item-name="Μπουγάτσα κρέμα"
          data-item-price={3}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Μπουγάτσα κρέμα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 3,00€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000059"
          data-item-name="Κρουασάν βουτύρου"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Κρουασάν βουτύρου
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Κρουασάν βουτύρου"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:krouasan-bouturou?c=1659688395"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:krouasan-bouturou?c=1659688395"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000060"
          data-item-name="Κρουασάν σοκολάτα"
          data-item-price="1,6"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Κρουασάν σοκολάτα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,60€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000105"
          data-item-name="Φύλλο σφολιάτας με Philadelphia & μπέικον"
          data-item-price="2,4"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Φύλλο σφολιάτας με Philadelphia &amp; μπέικον
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,40€</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="tost-sandwiches"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={6}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#tost-sandwichesCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">Τοστ | Sandwiches </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="tost-sandwichesCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000061"
          data-item-name="Τοστ ζαμπόν & gouda"
          data-item-price="1,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Τοστ ζαμπόν &amp; gouda
              </p>
              <p className={areaparagraf2}>
                Με ψωμί του τοστ λευκό
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000062"
          data-item-name="Τοστ γαλοπούλα & gouda"
          data-item-price="1,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Τοστ γαλοπούλα &amp; gouda
              </p>
              <p className={areaparagraf2}>
                Με ψωμί του τοστ λευκό
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 1,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000063"
          data-item-name="Μπαγκέτα λευκή ζαμπόν & gouda"
          data-item-price="2,5"
          data-is-popular-item="true"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Μπαγκέτα λευκή ζαμπόν &amp; gouda
              </p>
              <p className={areaparagraf2}>
                Με ζαμπόν, gouda, ντομάτα, μαρούλι &amp; μαγιονέζα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 2,50€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Μπαγκέτα λευκή ζαμπόν & gouda"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000063?c=f2ee425351b81068cb6eaefb140655d5"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000063?c=f2ee425351b81068cb6eaefb140655d5"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000064"
          data-item-name="Μπαγκέτα λευκή γαλοπούλα & gouda"
          data-item-price="2,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Μπαγκέτα λευκή γαλοπούλα &amp; gouda
              </p>
              <p className={areaparagraf2}>
                Με γαλοπούλα, gouda, ντομάτα, μαρούλι &amp; μαγιονέζα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 2,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000107"
          data-item-name="Ζάγκας food group chicken club"
          data-item-price="2,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Ζάγκας food group chicken club
              </p>
              <p className={areaparagraf2}>
                Συσκευασμένο. Με κοτομπουκιές, gouda, μπέικον &amp; αγροτική σως
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000108"
          data-item-name="Ζάγκας food group ψωμί του τοστ ολικής άλεσης γαλοπούλα, gouda, αγροτική σως"
          data-item-price="2,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Ζάγκας food group ψωμί του τοστ ολικής άλεσης γαλοπούλα, gouda,
                αγροτική σως
              </p>
              <p className={areaparagraf2}>
                Συσκευασμένο
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,50€</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="oikogeneia-stergioy"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={16}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#oikogeneia-stergioyCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">
            Οικογένεια Στεργίου{" "}
          </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="oikogeneia-stergioyCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000065"
          data-item-name="Στεργίου κρουασάν με γέμιση πραλίνα φουντουκιού 105gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου κρουασάν με γέμιση πραλίνα φουντουκιού 105gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου κρουασάν με γέμιση πραλίνα φουντουκιού 105gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-krouasan-me-gemisi-pralina-phountoukiou-105gr?c=1639581261"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-krouasan-me-gemisi-pralina-phountoukiou-105gr?c=1639581261"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000066"
          data-item-name="Στεργίου βιεννέζικο με γέμιση κρέμα σοκολάτας 120gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου βιεννέζικο με γέμιση κρέμα σοκολάτας 120gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου βιεννέζικο με γέμιση κρέμα σοκολάτας 120gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-bienneziko-me-gemisi-krema-sokolatas-120gr?c=1639581255"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-bienneziko-me-gemisi-krema-sokolatas-120gr?c=1639581255"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000067"
          data-item-name="Στεργίου strudel με γέμιση μήλο & κανέλα 125gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου strudel με γέμιση μήλο &amp; κανέλα 125gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου strudel με γέμιση μήλο & κανέλα 125gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-strudel-me-gemisi-milo-kai-kanela-125gr?c=1639581277"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-strudel-me-gemisi-milo-kai-kanela-125gr?c=1639581277"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000068"
          data-item-name="Στεργίου mini τσουρέκι με μαστίχα Χίου 90gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου mini τσουρέκι με μαστίχα Χίου 90gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου mini τσουρέκι με μαστίχα Χίου 90gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-mini-tsoureki-me-mastixa-xiou-90gr?c=1639581272"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-mini-tsoureki-me-mastixa-xiou-90gr?c=1639581272"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000069"
          data-item-name="Στεργίου mini τσουρέκι με γέμιση πραλίνα φουντουκιού 90gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου mini τσουρέκι με γέμιση πραλίνα φουντουκιού 90gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου mini τσουρέκι με γέμιση πραλίνα φουντουκιού 90gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-mini-tsoureki-me-gemisi-pralina-phountoukiou-90gr?c=1639581274"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-mini-tsoureki-me-gemisi-pralina-phountoukiou-90gr?c=1639581274"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000070"
          data-item-name="Στεργίου μηλόπιτα 105gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου μηλόπιτα 105gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου μηλόπιτα 105gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-milopita-105gr?c=1639581264"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-milopita-105gr?c=1639581264"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000071"
          data-item-name="Στεργίου λεμονόπιτα 105gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου λεμονόπιτα 105gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου λεμονόπιτα 105gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-lemonopita-105gr?c=1639581259"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-lemonopita-105gr?c=1639581259"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000072"
          data-item-name="Στεργίου soft cookie με κομμάτια σοκολάτας υγείας 100gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου soft cookie με κομμάτια σοκολάτας υγείας 100gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου soft cookie με κομμάτια σοκολάτας υγείας 100gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-soft-cookie-me-kommatia-sokolatas-ugeias-100gr?c=1639581285"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-soft-cookie-me-kommatia-sokolatas-ugeias-100gr?c=1639581285"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000073"
          data-item-name="Στεργίου muffin σοκολάτας με γέμιση πραλίνα φουντουκιού 120gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου muffin σοκολάτας με γέμιση πραλίνα φουντουκιού 120gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου muffin σοκολάτας με γέμιση πραλίνα φουντουκιού 120gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-muffin-sokolatas-me-gemisi-pralina-phountoukiou-120gr?c=1639581290"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-muffin-sokolatas-me-gemisi-pralina-phountoukiou-120gr?c=1639581290"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000074"
          data-item-name="Στεργίου muffin βουτύρου με γέμιση salted caramel 120gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου muffin βουτύρου με γέμιση salted caramel 120gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου muffin βουτύρου με γέμιση salted caramel 120gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-muffin-bouturou-me-gemisi-salted-caramel-120gr?c=1639581292"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-muffin-bouturou-me-gemisi-salted-caramel-120gr?c=1639581292"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000075"
          data-item-name="Στεργίου cake ανάμεικτο 80gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου cake ανάμεικτο 80gr
              </p>
              <p className={areaparagraf2}>
                Φέτα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000076"
          data-item-name="Στεργίου cake πορτοκάλι ατομικό 80gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου cake πορτοκάλι ατομικό 80gr
              </p>
              <p className={areaparagraf2}>
                Φέτα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου cake πορτοκάλι ατομικό 80gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-cake-portokali-atomiko-80gr?c=1639581284"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-cake-portokali-atomiko-80gr?c=1639581284"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000078"
          data-item-name="Στεργίου κριτσίνια με καρότο Vegan 90gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου κριτσίνια με καρότο Vegan 90gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου κριτσίνια με καρότο Vegan 90gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-kritsinia-me-karoto-vegan-90gr?c=1639581256"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-kritsinia-me-karoto-vegan-90gr?c=1639581256"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000079"
          data-item-name="Στεργίου κριτσίνια πολύσπορα 90gr"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου κριτσίνια πολύσπορα 90gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου κριτσίνια πολύσπορα 90gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-kritsinia-poluspora-90gr?c=1639581258"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-kritsinia-poluspora-90gr?c=1639581258"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000080"
          data-item-name="Στεργίου κριτσίνια με σουσάμι Vegan 180gr"
          data-item-price="1,7"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου κριτσίνια με σουσάμι Vegan 180gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,70€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου κριτσίνια με σουσάμι Vegan 180gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-kritsinia-me-sousami-vegan-180gr?c=1639581294"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-kritsinia-me-sousami-vegan-180gr?c=1639581294"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000081"
          data-item-name="Στεργίου κριτσίνια με ηλιόσπορο Vegan 180gr"
          data-item-price="1,7"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Στεργίου κριτσίνια με ηλιόσπορο Vegan 180gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,70€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Στεργίου κριτσίνια με ηλιόσπορο Vegan 180gr"
                width={448}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-kritsinia-me-iliosporo-vegan-180gr?c=1639581293"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/stergiou-kritsinia-me-iliosporo-vegan-180gr?c=1639581293"
              />
              
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="salates"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={3}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#salatesCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">Σαλάτες </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="salatesCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000082"
          data-item-name="Ντάκος"
          data-item-price={4}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Ντάκος
              </p>
              <p className={areaparagraf2}>
                Σαλάτα με παξιμάδι, ντομάτα, φέτα, ελιά ροδέλα, κάππαρη, λάδι
                &amp; ρίγανη
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>4,00€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000083"
          data-item-name="Πράσινη"
          data-item-price={4}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Πράσινη
              </p>
              <p className={areaparagraf2}>
                Σαλάτα πράσινη mix με ντοματίνια, παρμεζάνα τριμμένη, λάδι,
                λεμόνι &amp; μουστάρδα
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>4,00€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000084"
          data-item-name="Φρουτοσαλάτα"
          data-item-price="3,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Φρουτοσαλάτα
              </p>
              <p className={areaparagraf2}>
                Με φρούτα εποχής
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>3,50€</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="zymarika"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={2}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#zymarikaCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">Ζυμαρικά </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="zymarikaCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000085"
          data-item-name="Spaghetti napolitana"
          data-item-price="3,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Spaghetti napolitana
              </p>
              <p className={areaparagraf2}>
                Με κόκκινη σάλτσα. Συνοδεύεται από τριμμένο κεφαλοτύρι
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 3,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000086"
          data-item-name="Spaghetti bolognese"
          data-item-price="3,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Spaghetti bolognese
              </p>
              <p className={areaparagraf2}>
                Με κόκκινη σάλτσα &amp; κιμά ανάμεικτο. Συνοδεύεται από τριμμένο
                κεφαλοτύρι
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>Από 3,50€</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="glyka"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={6}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#glykaCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">Γλυκά </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="glykaCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000106"
          data-item-name="Ζάγκας food group προφιτερόλ 180gr"
          data-item-price="2,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Ζάγκας food group προφιτερόλ 180gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000109"
          data-item-name="Ζάγκας food group mille feuille 180gr"
          data-item-price="2,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Ζάγκας food group mille feuille 180gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000110"
          data-item-name="Ζάγκας food group Bueno 180gr"
          data-item-price="2,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Ζάγκας food group Bueno 180gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000112"
          data-item-name="Ζάγκας food group Black forest 180gr"
          data-item-price="2,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Ζάγκας food group Black forest 180gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000111"
          data-item-name="Ζάγκας food group cheesecake 180gr"
          data-item-price="2,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Ζάγκας food group cheesecake 180gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,50€</span>
              </button>
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000113"
          data-item-name="Ζάγκας food group σοκολατόπιτα 140gr"
          data-item-price="2,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Ζάγκας food group σοκολατόπιτα 140gr
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,50€</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="anapsyktika"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={11}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#anapsyktikaCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">Αναψυκτικά </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="anapsyktikaCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000017"
          data-item-name="Coca-Cola 330ml"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Coca-Cola 330ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Coca-Cola 330ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/coca-cola-330ml?c=1649881596"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/coca-cola-330ml?c=1649881596"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000018"
          data-item-name="Coca-Cola zero 330ml"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Coca-Cola zero 330ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Coca-Cola zero 330ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/coca-cola-zero-330ml?c=1649881604"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/coca-cola-zero-330ml?c=1649881604"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000019"
          data-item-name="Fanta κόκκινη 330ml"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Fanta κόκκινη 330ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Fanta κόκκινη 330ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000019?c=51e8735c7912636e7f22b3485878d5f6"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/restaurants/5551558/menu_item/000000000019?c=51e8735c7912636e7f22b3485878d5f6"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000020"
          data-item-name="Fanta μπλε 330ml"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Fanta μπλε 330ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Fanta μπλε 330ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/fanta-mple-330ml?c=1659605975"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/fanta-mple-330ml?c=1659605975"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000021"
          data-item-name="Sprite 330ml"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Sprite 330ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Sprite 330ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/sprite-330ml?c=1649884002"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/sprite-330ml?c=1649884002"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000031"
          data-item-name="Amita πορτοκάλι 330ml"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Amita πορτοκάλι 330ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Amita πορτοκάλι 330ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/amita-portokali-330ml?c=-62135596800"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/amita-portokali-330ml?c=-62135596800"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000032"
          data-item-name="Amita Motion 330ml"
          data-item-price="1,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Amita Motion 330ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,50€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Amita Motion 330ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/amita-motion-330ml?c=-62135596800"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/amita-motion-330ml?c=-62135596800"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000026"
          data-item-name="Lipton ice tea λεμόνι 330ml"
          data-item-price="1,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Lipton ice tea λεμόνι 330ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,50€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Lipton ice tea λεμόνι 330ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:lipton-ice-tea-lemoni-330ml?c=1649671534"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:lipton-ice-tea-lemoni-330ml?c=1649671534"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000027"
          data-item-name="Lipton ice tea ροδάκινο 330ml"
          data-item-price="1,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Lipton ice tea ροδάκινο 330ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,50€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Lipton ice tea ροδάκινο 330ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:lipton-ice-tea-rodakino-330ml?c=1649671537"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:lipton-ice-tea-rodakino-330ml?c=1649671537"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000028"
          data-item-name="Νερό 500ml"
          data-item-price="0,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Νερό 500ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>0,50€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Νερό 500ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/nero-500ml?c=1639581306"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/nero-500ml?c=1639581306"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000029"
          data-item-name="Νερό 1lt"
          data-item-price={1}
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Νερό 1lt
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,00€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Νερό 1lt"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/nero-1lt?c=1639581307"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/nero-1lt?c=1639581307"
              />
              
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      id="mpyres"
      className={shopprofilemenusection}
      data-section-offers={0}
      data-section-items={4}
    >
      <h3
        className={shopprofilemenusectionheading}
        href="#mpyresCollapse"
        role="button"
        aria-expanded="false"
        aria-controls="offersCollapse"
      >
        <button className={buttonzagolovki}>
          <span className="w-75 text-truncate h3 mb-0">Μπύρες </span>
        </button>
      </h3>
      <ul
        className="shop-profile-menu-list mb-0 list-unstyled"
        id="mpyresCollapse"
      >
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000022"
          data-item-name="Άλφα 330ml"
          data-item-price="1,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Άλφα 330ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,50€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Άλφα 330ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/alpha-330ml?c=1659618427"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/alpha-330ml?c=1659618427"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000023"
          data-item-name="Amstel 330ml"
          data-item-price="1,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Amstel 330ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,50€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Amstel 330ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/amstel-330ml?c=1655734078"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/amstel-330ml?c=1655734078"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000024"
          data-item-name="Heineken 330ml"
          data-item-price="1,7"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Heineken 330ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>1,70€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Heineken 330ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/heineken-330ml?c=1649887097"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/heineken-330ml?c=1649887097"
              />
              
            </div>
          </div>
        </li>
        <li
          className={shopprofilemenulistitem}
          data-item-code="IT_000000000025"
          data-item-name="Kaiser 500ml"
          data-item-price="2,5"
          data-is-popular-item="false"
        >
          <div className={areadescription}>
            <div>
              <p className={areaparagraf}>
                Kaiser 500ml
              </p>
              <button
                type="button"
                className={pricebutton}
              >
                <span className={span}>2,50€</span>
              </button>
            </div>
            <div className={areadivimage}>
              <img
                alt="Kaiser 500ml"
                width={556}
                height={392}
                className={shopprofilemenulistitemimg}
                data-src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:kaiser-500ml?c=1649869996"
                data-blurhash="L3TSUA%M%M%M~qj[IUj[D%ay%May"
                data-skeleton="skeleton-shape--item-img"
                src="https://cdn.e-food.gr/cdn-cgi/image/h=160,fit=cover,q=100,f=auto/global_assets/vertical:food:kaiser-500ml?c=1649869996"
              />
              
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

      
        
    

    </Layout>
  )
}
export default AgerRu