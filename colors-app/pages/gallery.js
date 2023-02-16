import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/colours.json'
import Navigation from '@/comp/navBar'
import HeaderBar from '@/comp/header'
import SortingDropdown from '@/comp/sortingBtn'
import Router, { useRouter } from "next/router"
import React, { useState } from 'react'
import handleClick from '@/comp/flip'
import SearchBar from '@/comp/search'


export default function Home() {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }


  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedCardIndex(index === flippedCardIndex ? null : index);
  }

  return (
    <>
      <Head>
        <title>Colours of Van Gogh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/020-vincent-van-gogh.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" rel="stylesheet" />
       
      </Head>

      <HeaderBar/>

      {/* <SortingDropdown /> */}

      <main className={styles.main}>
      {/* <SearchBar /> */}

{
  record.map( (rec, index) => {
    if (rec.genre !== "landscape") {
      return null;
    }

    const isFlipped = index === flippedCardIndex;
    const flipClass = isFlipped ? styles.flipped : '';
          
    return(
      <>
                  
        <>{rec.genre == "landscape" ? <div className={styles.contentContainer} key={index}>
            <div className={`${styles.flipCard} ${flipClass}`} onClick={() => handleCardClick(index)}>

              {/* FRONT Card */}
              <div className={styles.imgContentWrap}>
                <img 
                    className={styles.drawing}
                    src={rec.link}
                />

                <div className={styles.contentGroup}>
                  <h3 className={styles.name}>{rec.name}</h3>
                  <div className={styles.style}>{rec.style}</div>
                  <div className={styles.year}>{rec.year}</div>
                  <p className={styles.clickDesc} style={{color: rec.colors[1], fontSize:'14px' ,fontStyle:'italic'}}>Click to see the colour palettes</p>
                </div>
              </div>

              {/* <div className={styles.colourGroup}>
                  {rec.colors.map((color, index) => (
                    <div key={index} style={{backgroundColor: color, width:'100%', height:'100%', borderRadius: '50%'}}></div>
                  ))}
              </div> */}



              {/* BACK Card */}
              <div className={styles.colourCont}>

                <div className={styles.contentGroup}>
                  <h3 className={styles.name}>{rec.name}</h3>
                  <div className={styles.style}>{rec.style}</div>
                  <div className={styles.year}>{rec.year}</div>
                  <div className={styles.year}>Genre: {rec.genre}</div>
                </div>

                <div className={styles.colourGroup}>
                  <div className={styles.colourGroupOne}>
                    <div>
                      <div className={styles.paletteColor} style={{backgroundColor: rec.colors[0], borderRadius: '50%'}}></div>
                      <p>{rec.colors[0]}</p>
                    </div>

                    <div>
                      <div className={styles.paletteColor} style={{backgroundColor: rec.colors[1], borderRadius: '50%'}}></div>
                      <p>{rec.colors[1]}</p>
                    </div>
                  </div>

                  <div className={styles.colourGroupTwo}>
                    <div>
                      <div className={styles.paletteColor} style={{backgroundColor: rec.colors[2], borderRadius: '50%'}}></div>
                      <p>{rec.colors[2]}</p>
                    </div>

                    <div>
                      <div className={styles.paletteColor} style={{backgroundColor: rec.colors[3], borderRadius: '50%'}}></div>
                      <p>{rec.colors[3]}</p>
                    </div>

                    <div>
                      <div className={styles.paletteColor} style={{backgroundColor: rec.colors[4], borderRadius: '50%'}}></div>
                      <p>{rec.colors[4]}</p>
                    </div>
                  </div>
                </div>

                  {/* <div style={{backgroundColor: rec.colors[0], width:'100%', height:'100%'}}
                  onClick={()=>console.log(rec.colors[1])}></div> */}
              </div>

            </div>

          </div> : <></>}</>



                </>
              )
            })
          }
      </main>
    </>
          

)}