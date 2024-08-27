"use client"; 

// main
import React from "react";
import Image from "next/image";
import Head from 'next/head'
import styles from "./styles/lookie.module.css";
import Script from 'next/script'
import Link from 'next/link'

import content from "./content";

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';


// carousel
// source: https://coreui.io/react/docs/components/carousel/#with-controls
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'; // Import CoreUI CSS


export default function Page() {
  return (
    <main className={styles.main}>

{/* To connect GA, replace Google analytics ID with real one  */}
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXX" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXXXXXXXXXX');
          `}
        </Script>
      </div>

      <Head>
        <title>Showcase </title>
        <meta name="description" content="Showcase" />
        <link rel="icon" src="/logo.png" />
      </Head>


      <div id="top" className={styles.top_bar}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Image
              src="/logo.png"
              alt="Logo"
              height={90}
              width={90}
            />
          </Link>
        </div>
        <input type="checkbox" id="menu-toggle" className={styles.menu_toggle} />
        <label htmlFor="menu-toggle" className={styles.menu_icon}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav className={styles.nav}>
          <a href="#section1" className={styles.nav_link}>{content.section1}</a>
          <a href="#section2" className={styles.nav_link}>{content.section2}</a>
          <a href="#section3" className={styles.nav_link}>{content.section3}</a>
          <a href="#section4" className={styles.nav_link}>{content.section4}</a>
        </nav>
      </div>


      <div className={styles.slider}>
        <CCarousel indicators interval={3000} pause="false">
          <CCarouselItem>
            <CImage className="d-block w-100" src="/images/slide1.png" alt="Slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src="/images/slide2.png" alt="Slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src="/images/slide3.png" alt="Slide 3" />
          </CCarouselItem>
        </CCarousel>
      </div>

      <div id="section1"  className={styles.section_title}>{content.section1}</div>
      <div className={styles.text_section}>
        <p>
          {content.s1p1}
        </p>
      </div>

      <div id="section2" className={styles.section_title}>{content.section2}</div>
      <div className={styles.services_section}>
        <p>
        {content.s2p1}
        </p>
        <div className={styles.options_grid}>
          <div className={styles.option_card}>
            <li><strong>{content.s2opt1}</strong>:  {content.s2p2}</li>
          </div>
          <div className={styles.option_card}>
            <li><strong>{content.s2opt2}</strong>: {content.s2p3}</li>
          </div>
          <div className={styles.option_card}>
            <li><strong>{content.s2opt3}</strong>: {content.s2p4}</li>
          </div>
          <div className={styles.option_card}>
            <li><strong>{content.s2opt4}</strong>: {content.s2p5}</li>
          </div>
          <div className={styles.option_card}>
            <li><strong>{content.s2opt5}</strong>: {content.s2p6}</li>
          </div>
          <div className={styles.option_card}>
            <li><strong>{content.s2opt6}</strong>: {content.s2p7}</li>
          </div>
        </div>
        <p>
        {content.s2p8}
        </p>
      </div>

      <div id="section3" className={styles.section_title}>{content.section3}</div>
      <div className={styles.pricing_section}>
        <p>
          {content.s3p1}
        </p>
        <div className={styles.options_grid}>
          <div className={styles.option_card}>
            <h2>{content.s3opt1}</h2>
            <p> {content.s3p2}</p>
          </div>
          <div className={styles.option_card}>
            <h2>{content.s3opt2}</h2>
            <p>{content.s3p3}</p>
          </div>
          <div className={styles.option_card}>
            <h2>{content.s3opt3}</h2>
            <p>{content.s3p4}</p>
          </div>
        </div>
        <p>
        {content.s3p5}
        </p>
      </div>


      <div id="section4" className={styles.section_title}>{content.section4}</div>
      <div className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_contact}>
            <p>Email: <a id="email" href="mailto:sample@gmail.com">sample@gmail.com</a></p>
            <p>Phone: <a id="phone" href="tel:+370xxxxxxxxxx">+370 xxx xxx xxx</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
