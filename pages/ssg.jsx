import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const ssg = ({ data}) => {
    return (
        
          
        <div className={styles.container}>
            <div className={styles.customgrid}>
            <h2 className={styles.card}> This page is statically generated </h2>
                <Link href="/"><div className={styles.back}>
                <p>Back to Home</p></div></Link>
            </div>
            
            {/* // <General data={data}/> */}
            <div className={styles.card }>
                <Image
                    src={data.flags.png}
      alt="Indian Flag"
      width={200}
      height={200}
                />
                <h2>Neighbouring Nations of India</h2>
                    <p>{data.borders.map((border, index) => (<p key={index}>{border}</p>))}
                    {/* {console.log(data.borders)} */}
                </p>
                </div>
                </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`https://restcountries.com/v3.1/name/india`)
    const[data] = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }


export default ssg
