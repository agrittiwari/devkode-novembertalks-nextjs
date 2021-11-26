import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function CSR () {
    const { data, error } = useSWR('/api/csr', fetcher)
    // console.log(`this is first log${data}`)
//  const [response] = data
    if (error) return (
        <>
            <div className={styles.card}>
                <p>failed to load</p>
            </div>
        </>
    )
  
    if (!data) return  (
        <>
            <div className={styles.card}>
                <p>loading...</p>
            </div>
        </>
    )

  // render data
    return (
        <div className={styles.container}>
    <div className={styles.customgrid}>
        <h2 className={styles.card}>This is Client Side rendered</h2>
        <Link href="/" prefetch={false} passHref><div className={styles.back}>
        <p>Back to Home</p></div></Link>
            </div>
            {/* {console.log(`this is second log${data}`)} */}
        <div className={styles.card }>
        <Image
            src={data.flags.svg}
alt="Indian Flag"
width={200}
height={200}
        />
        <h2>Neighbouring Nations of India</h2>
            <p>{data.borders.map((border, index) => (<li key={index}>{border}</li>))}
                    {/* {console.log(` this is 3rd log${ data.borders }`)} */}
                </p>
    </div>
    
    {/* {console.log({ data })} */}
</div>)
}



export default CSR
