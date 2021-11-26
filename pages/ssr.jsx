import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const ssr = ({data}) => {
   
   
    return (
        <div className={styles.container}>
            <div className={styles.customgrid}>
                <h2 className={styles.card}>This is server-side rendered</h2>
        
                <Link href="/" prefetch={false}><div className={styles.back}>
                <p>Back to Home</p></div></Link>
            </div>
            
            {/* // <General data={data}/> */}
            <div className={styles.card }>
                <Image
                    src={data.flags.png}
      alt="INdian Flag"
      width={200}
      height={200}
                />
                <h2>Neighbouring Nations of India</h2>
                    <p>{data.borders.map((border, index) => (<p key={index}>{border}</p>))}
                    { console.log(data.borders)}</p>
            </div>
            
            {/* {console.log({ data })} */}
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://restcountries.com/v3.1/name/india`)
    const [data] = await  res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
export default ssr
